declare module 'ol/reproj' {

  import { Coordinate } from 'ol/coordinate';
  import { Extent } from 'ol/extent';
  import Projection from 'ol/proj/Projection';
  import Triangulation from 'ol/reproj/Triangulation';

  export function calculateSourceResolution(sourceProj: Projection, targetProj: Projection, targetCenter: Coordinate, targetResolution: number): number;

  export function render(width: number, height: number, pixelRatio: number, sourceResolution: number, sourceExtent: Extent, targetResolution: number, targetExtent: Extent, triangulation: Triangulation, sources: any[], gutter: number, opt_renderEdges?: boolean): HTMLCanvasElement;

}
