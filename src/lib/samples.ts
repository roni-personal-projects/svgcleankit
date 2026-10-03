export interface SampleSvg {
  id: string;
  name: string;
  description: string;
  svg: string;
}

export const SAMPLE_SVGS: SampleSvg[] = [
  {
    id: 'figma-badge',
    name: 'Figma Exported Badge',
    description: 'Contains Adobe/Figma masks, empty <g> groups, xmlns bloat, and excess decimal precision.',
    svg: `<?xml version="1.0" encoding="UTF-8"?>
<!-- Generator: Adobe Illustrator 27.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
<svg width="400.00000000px" height="400.00000000px" viewBox="0 0 400.00000000 400.00000000" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape">
    <!-- Clean, secure, and modern vector icon badge -->
    <title>Security Shield Badge - Vector</title>
    <desc>Created with Figma (v116.4) and Adobe Illustrator</desc>
    <metadata>
        <rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#">
            <rdf:Description rdf:about="" xmlns:dc="http://purl.org/dc/elements/1.1/">
                <dc:format>image/svg+xml</dc:format>
                <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage"/>
                <dc:title>Shield Icon</dc:title>
            </rdf:Description>
        </rdf:RDF>
    </metadata>
    <defs>
        <linearGradient id="shield_grad_primary" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0.000000%" stop-color="#0070F3" stop-opacity="1.000000"/>
            <stop offset="50.000000%" stop-color="#7928CA" stop-opacity="1.000000"/>
            <stop offset="100.000000%" stop-color="#FF0080" stop-opacity="1.000000"/>
        </linearGradient>
        <linearGradient id="unused_gradient_1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#ff0000"/>
            <stop offset="100%" stop-color="#00ff00"/>
        </linearGradient>
    </defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Artboard-Mobile-Export" transform="translate(0.000000, 0.000000)">
            <g id="Shield-Group" transform="translate(40.000000, 40.000000)">
                <g id="Empty-Wrapper-Group"></g>
                <path d="M160.00000000,20.00000000 L40.00000000,64.00000000 C40.00000000,168.00000000 91.20000000,265.60000000 160.00000000,300.00000000 C228.80000000,265.60000000 280.00000000,168.00000000 280.00000000,64.00000000 L160.00000000,20.00000000 Z" fill="url(#shield_grad_primary)" stroke="#171717" stroke-width="4.00000000"></path>
                <path d="M110.00000000,150.00000000 L145.00000000,185.00000000 L215.00000000,115.00000000" stroke="#FFFFFF" stroke-width="12.00000000" stroke-linecap="round" stroke-linejoin="round" fill="none"></path>
                <circle cx="160.00000000" cy="160.00000000" r="0.00000000" display="none" fill="#000000"></circle>
            </g>
        </g>
    </g>
</svg>`,
  },
  {
    id: 'analytics-chart',
    name: 'Analytics Vector Chart',
    description: 'Heavy multi-stop gradient chart with redundant coordinate decimals and unnecessary metadata.',
    svg: `<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg width="500" height="300" viewBox="0 0 500 300" version="1.1" xmlns="http://www.w3.org/2000/svg">
  <!-- Chart visual element with redundant namespaces and unneeded precision -->
  <g id="background-grid" stroke="#EBEBEB" stroke-width="1.000000">
    <line x1="50.000000" y1="50.000000" x2="450.000000" y2="50.000000" />
    <line x1="50.000000" y1="120.000000" x2="450.000000" y2="120.000000" />
    <line x1="50.000000" y1="190.000000" x2="450.000000" y2="190.000000" />
    <line x1="50.000000" y1="260.000000" x2="450.000000" y2="260.000000" />
  </g>
  <defs>
    <linearGradient id="chart_glow" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#00DFD8" stop-opacity="0.600000" />
      <stop offset="100%" stop-color="#007CF0" stop-opacity="0.000000" />
    </linearGradient>
  </defs>
  <g id="chart-area">
    <path d="M 50.000000 260.000000 L 50.000000 180.000000 C 110.000000 130.000000 170.000000 210.000000 230.000000 140.000000 C 290.000000 70.000000 350.000000 110.000000 450.000000 70.000000 L 450.000000 260.000000 Z" fill="url(#chart_glow)" />
    <path d="M 50.000000 180.000000 C 110.000000 130.000000 170.000000 210.000000 230.000000 140.000000 C 290.000000 70.000000 350.000000 110.000000 450.000000 70.000000" fill="none" stroke="#0070F3" stroke-width="4.000000" stroke-linecap="round" />
    <circle cx="230.000000" cy="140.000000" r="6.000000" fill="#FFFFFF" stroke="#0070F3" stroke-width="3.000000" />
    <circle cx="450.000000" cy="70.000000" r="6.000000" fill="#FFFFFF" stroke="#0070F3" stroke-width="3.000000" />
  </g>
</svg>`,
  },
  {
    id: 'clean-feather-icon',
    name: 'Feather / Lucide Style Icon',
    description: 'Standard SVG icon with unnecessary XML namespaces and empty groups.',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-zap">
  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
</svg>`,
  },
];
