export interface FaqItem {
  q: string;
  a: string;
}

export const faqs: FaqItem[] = [
  {
    q: "Will this SVG optimizer degrade visual appearance or sharpness?",
    a: "No. SVGCleanKit operates as a lossless online SVG optimizer by default. It preserves essential path geometries, curves, gradients, and strokes. The Balanced preset applies sub-pixel coordinate accuracy (3 decimal places), which looks identical to the human eye on standard and Retina/HiDPI screens."
  },
  {
    q: "Are my files uploaded to a remote server when using this online SVG optimizer?",
    a: "Never. All processing happens 100% locally in your web browser using client-side JavaScript. Your vector graphics never touch our servers, no cookies or analytics track your files, and the app works completely offline once loaded in your browser."
  },
  {
    q: "How does this SVG cleaner reduce SVG file size?",
    a: "Our automated SVG cleaner strips non-rendering XML metadata, creator comments, editor namespaces (like xmlns:inkscape and sketch), unreferenced definitions, and redundant group wrappers. Combined with coordinate precision rounding and path command merging, it routinely reduces SVG file size by 50% to 80%."
  },
  {
    q: "What is the recommended coordinate precision level for an SVG compressor?",
    a: "For 99% of web icons, logos, and UI elements, a precision of 2 or 3 decimal places is ideal. It saves 20% to 35% in path data length without visible visual shift. If you are working with extremely fine medical or scientific micro-diagrams, you can set precision to 4 or 5."
  },
  {
    q: "Why do SVGs exported from Figma, Sketch, or Illustrator contain so much bloat?",
    a: "Design tools must preserve editing capabilities like layer names, undo states, clip masks, artboard coordinates, and proprietary XML namespaces. When exporting to SVG, tools often dump these internal metadata structures into the file. SVGCleanKit cleanly purges them."
  },
  {
    q: "How do I use this SVG minifier online to export React JSX components?",
    a: "Click 'Copy JSX' in the export bar. Our SVG minifier online converts all hyphenated attributes (such as clip-path, fill-rule, and stroke-width) into standard React camelCase JSX properties and wraps it in a typed React component snippet ready to paste into your codebase."
  },
  {
    q: "Can I compress multiple SVG files in batch and download a ZIP?",
    a: "Yes! Drag and drop up to 20 files (or up to 50MB) into the upload area. Our batch SVG compressor will queue and optimize all of them concurrently, and you can download the entire bundle as a single .zip file with one click."
  },
  {
    q: "What is the difference between an SVG optimizer, SVG compressor, and SVG cleaner?",
    a: "While these terms are often used interchangeably, an SVG cleaner focuses on stripping editor namespaces, metadata, and security threats; an SVG compressor minimizes mathematical path coordinates and simplifies curves; and an SVG optimizer combines both processes to deliver the leanest production vector code."
  }
];
