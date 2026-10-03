import { optimize } from 'svgo/browser';
import JSZip from 'jszip';

export interface OptimizationOptions {
  floatPrecision: number;
  removeDoctype: boolean;
  removeXMLProcInst: boolean;
  removeComments: boolean;
  removeMetadata: boolean;
  removeEditorsNSData: boolean;
  cleanupAttrs: boolean;
  mergeStyles: boolean;
  inlineStyles: boolean;
  minifyStyles: boolean;
  cleanupIds: boolean;
  removeUselessDefs: boolean;
  cleanupNumericValues: boolean;
  convertColors: boolean;
  removeUnknownsAndDefaults: boolean;
  removeNonInheritableGroupAttrs: boolean;
  removeUselessStrokeAndFill: boolean;
  removeViewBox: boolean;
  cleanupEnableBackground: boolean;
  removeHiddenElems: boolean;
  removeEmptyText: boolean;
  convertShapeToPath: boolean;
  convertEllipseToCircle: boolean;
  moveElemsAttrsToGroup: boolean;
  moveGroupAttrsToElems: boolean;
  collapseGroups: boolean;
  convertPathData: boolean;
  convertTransform: boolean;
  removeEmptyAttrs: boolean;
  removeEmptyContainers: boolean;
  mergePaths: boolean;
  removeUnusedNS: boolean;
  sortAttrs: boolean;
  removeTitle: boolean;
  removeDesc: boolean;
  convertStyleToAttrs: boolean;
  multipass: boolean;
}

export const DEFAULT_OPTIONS: OptimizationOptions = {
  floatPrecision: 3,
  removeDoctype: true,
  removeXMLProcInst: true,
  removeComments: true,
  removeMetadata: true,
  removeEditorsNSData: true,
  cleanupAttrs: true,
  mergeStyles: true,
  inlineStyles: true,
  minifyStyles: true,
  cleanupIds: false, // safer to keep IDs by default to prevent breaking referenced gradients/masks
  removeUselessDefs: true,
  cleanupNumericValues: true,
  convertColors: true,
  removeUnknownsAndDefaults: true,
  removeNonInheritableGroupAttrs: true,
  removeUselessStrokeAndFill: true,
  removeViewBox: false, // essential for responsive SVGs!
  cleanupEnableBackground: true,
  removeHiddenElems: true,
  removeEmptyText: true,
  convertShapeToPath: true,
  convertEllipseToCircle: true,
  moveElemsAttrsToGroup: true,
  moveGroupAttrsToElems: true,
  collapseGroups: true,
  convertPathData: true,
  convertTransform: true,
  removeEmptyAttrs: true,
  removeEmptyContainers: true,
  mergePaths: true,
  removeUnusedNS: true,
  sortAttrs: true,
  removeTitle: true,
  removeDesc: true,
  convertStyleToAttrs: true,
  multipass: true,
};

export const PRESETS: Record<string, Partial<OptimizationOptions>> = {
  recommended: {
    ...DEFAULT_OPTIONS,
  },
  aggressive: {
    ...DEFAULT_OPTIONS,
    floatPrecision: 2,
    cleanupIds: true,
    removeTitle: true,
    removeDesc: true,
    convertShapeToPath: true,
    mergePaths: true,
  },
  reactReady: {
    ...DEFAULT_OPTIONS,
    removeDoctype: true,
    removeXMLProcInst: true,
    removeComments: true,
    removeMetadata: true,
    removeEditorsNSData: true,
    removeViewBox: false,
    cleanupIds: false,
    convertStyleToAttrs: true,
  },
  safe: {
    ...DEFAULT_OPTIONS,
    floatPrecision: 4,
    cleanupIds: false,
    removeTitle: false,
    removeDesc: false,
    removeViewBox: false,
    convertShapeToPath: false,
    mergePaths: false,
  },
};

export interface OptimizationResult {
  originalSize: number;
  optimizedSize: number;
  savingsBytes: number;
  savingsPercent: number;
  optimizedSvg: string;
  originalSvg: string;
}

export function buildSvgoPlugins(options: OptimizationOptions): any[] {
  const precision = Math.max(0, Math.min(6, options.floatPrecision));

  const plugins: any[] = [
    {
      name: 'preset-default',
      params: {
        overrides: {
          removeViewBox: options.removeViewBox,
          removeTitle: options.removeTitle,
          removeDesc: options.removeDesc,
          cleanupIds: options.cleanupIds,
          convertColors: options.convertColors,
          convertPathData: options.convertPathData ? { floatPrecision: precision } : false,
          cleanupNumericValues: options.cleanupNumericValues ? { floatPrecision: precision } : false,
          convertTransform: options.convertTransform ? { floatPrecision: precision } : false,
          convertShapeToPath: options.convertShapeToPath ? { convertArcs: true } : false,
          mergePaths: options.mergePaths ? { floatPrecision: precision } : false,
          collapseGroups: options.collapseGroups,
          removeHiddenElems: options.removeHiddenElems,
          removeEmptyContainers: options.removeEmptyContainers,
          removeEmptyAttrs: options.removeEmptyAttrs,
          removeUselessDefs: options.removeUselessDefs,
          removeEditorsNSData: options.removeEditorsNSData,
          removeComments: options.removeComments,
          removeMetadata: options.removeMetadata,
          removeDoctype: options.removeDoctype,
          removeXMLProcInst: options.removeXMLProcInst,
          removeUnknownsAndDefaults: options.removeUnknownsAndDefaults,
          removeUselessStrokeAndFill: options.removeUselessStrokeAndFill,
          moveElemsAttrsToGroup: options.moveElemsAttrsToGroup,
          moveGroupAttrsToElems: options.moveGroupAttrsToElems,
          cleanupEnableBackground: options.cleanupEnableBackground,
          removeEmptyText: options.removeEmptyText,
          convertEllipseToCircle: options.convertEllipseToCircle,
        },
      },
    },
  ];

  if (options.sortAttrs) {
    plugins.push({ name: 'sortAttrs' });
  }

  if (options.convertStyleToAttrs) {
    plugins.push({ name: 'convertStyleToAttrs' });
  }

  if (options.removeUnusedNS) {
    plugins.push({ name: 'removeUnusedNS' });
  }

  return plugins;
}

export function optimizeSvgString(svgText: string, options: OptimizationOptions = DEFAULT_OPTIONS): OptimizationResult {
  const trimmed = svgText.trim();
  if (!trimmed.includes('<svg')) {
    throw new Error('Input does not appear to contain a valid SVG element.');
  }

  const originalSize = new Blob([trimmed]).size;
  const plugins = buildSvgoPlugins(options);

  const svgoResult = optimize(trimmed, {
    multipass: options.multipass,
    plugins,
  });

  const optimizedSvg = svgoResult.data;
  const optimizedSize = new Blob([optimizedSvg]).size;
  const savingsBytes = Math.max(0, originalSize - optimizedSize);
  const savingsPercent = originalSize > 0 ? ((savingsBytes / originalSize) * 100) : 0;

  return {
    originalSize,
    optimizedSize,
    savingsBytes,
    savingsPercent: Math.round(savingsPercent * 10) / 10,
    optimizedSvg,
    originalSvg: trimmed,
  };
}

export function formatBytes(bytes: number): string {
  if (bytes === 0) return '0 B';
  const k = 1024;
  const sizes = ['B', 'KB', 'MB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
}

export function convertToJsx(svgString: string): string {
  // Convert standard HTML/SVG attributes to camelCase React properties
  const attrMap: Record<string, string> = {
    'class=': 'className=',
    'clip-path=': 'clipPath=',
    'clip-rule=': 'clipRule=',
    'fill-opacity=': 'fillOpacity=',
    'fill-rule=': 'fillRule=',
    'stroke-dasharray=': 'strokeDasharray=',
    'stroke-dashoffset=': 'strokeDashoffset=',
    'stroke-linecap=': 'strokeLinecap=',
    'stroke-linejoin=': 'strokeLinejoin=',
    'stroke-miterlimit=': 'strokeMiterlimit=',
    'stroke-opacity=': 'strokeOpacity=',
    'stroke-width=': 'strokeWidth=',
    'stop-color=': 'stopColor=',
    'stop-opacity=': 'stopOpacity=',
    'font-family=': 'fontFamily=',
    'font-size=': 'fontSize=',
    'font-weight=': 'fontWeight=',
    'letter-spacing=': 'letterSpacing=',
    'text-anchor=': 'textAnchor=',
    'dominant-baseline=': 'dominantBaseline=',
    'xmlns:xlink=': 'xmlnsXlink=',
    'xlink:href=': 'xlinkHref=',
  };

  let jsx = svgString;
  for (const [attr, jsxAttr] of Object.entries(attrMap)) {
    jsx = jsx.split(attr).join(jsxAttr);
  }

  // Wrap in a standard React component snippet
  return `export function Icon(props: React.SVGProps<SVGSVGElement>) {\n  return (\n    ${jsx.replace('<svg', '<svg {...props}')}\n  );\n}`;
}

export function convertToDataUri(svgString: string): string {
  const encoded = encodeURIComponent(svgString)
    .replace(/'/g, '%27')
    .replace(/"/g, '%22');
  return `data:image/svg+xml;charset=utf-8,${encoded}`;
}

export function convertToCssBackground(svgString: string): string {
  const dataUri = convertToDataUri(svgString);
  return `background-image: url("${dataUri}");\nbackground-repeat: no-repeat;\nbackground-size: contain;`;
}

export async function createZipBundle(files: { name: string; content: string }[]): Promise<Blob> {
  const zip = new JSZip();
  files.forEach((file) => {
    const filename = file.name.endsWith('.svg') ? file.name : `${file.name}.svg`;
    zip.file(filename, file.content);
  });
  return await zip.generateAsync({ type: 'blob' });
}
