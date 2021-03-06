import { Coordinate } from '../../coordinate';
import { Extent } from '../../extent';
import Feature from '../../Feature';
import { Size } from '../../size';
import WebGLBuffer from '../../webgl/Buffer';
import WebGLContext from '../../webgl/Context';
import RenderFeature from '../Feature';
import VectorContext from '../VectorContext';
import Locations from './circlereplay/defaultshader/Locations';
import WebGLLineStringReplay from './LineStringReplay';
import Locations_1 from './linestringreplay/defaultshader/Locations';
import Locations_2 from './polygonreplay/defaultshader/Locations';
import Locations_3 from './texturereplay/defaultshader/Locations';

export default class WebGLReplay extends VectorContext {
    constructor(tolerance: number, maxExtent: Extent);
    protected verticesBuffer: WebGLBuffer;
    protected vertices: number[];
    protected tolerance: number;
    protected indices: number[];
    protected indicesBuffer: WebGLBuffer;
    protected lineStringReplay: WebGLLineStringReplay;
    protected origin: Coordinate;
    protected startIndicesFeature: any[];
    protected startIndices: number[];
    protected drawElements(gl: WebGLRenderingContext, context: WebGLContext, start: number, end: number): void;
    protected drawHitDetectionReplay<T>(gl: WebGLRenderingContext, context: WebGLContext, skippedFeaturesHash: { [key: string]: boolean }, featureCallback: ((param0: Feature | RenderFeature) => T), oneByOne: boolean, opt_hitExtent?: Extent): T;
    protected drawHitDetectionReplayAll<T>(gl: WebGLRenderingContext, context: WebGLContext, skippedFeaturesHash: { [key: string]: boolean }, featureCallback: ((param0: Feature | RenderFeature) => T)): T;
    protected drawHitDetectionReplayOneByOne<T>(gl: WebGLRenderingContext, context: WebGLContext, skippedFeaturesHash: { [key: string]: boolean }, featureCallback: ((param0: Feature | RenderFeature) => T), opt_hitExtent?: Extent): T;
    protected setUpProgram(gl: WebGLRenderingContext, context: WebGLContext, size: Size, pixelRatio: number): Locations | Locations_1 | Locations_2 | Locations_3;
    protected shutDownProgram(gl: WebGLRenderingContext, locations: Locations | Locations_1 | Locations_2 | Locations_3): void;
    protected drawReplay(gl: WebGLRenderingContext, context: WebGLContext, skippedFeaturesHash: { [key: string]: boolean }, hitDetection: boolean): void;
    protected maxExtent: Extent;
    replay<T>(context: WebGLContext, center: Coordinate, resolution: number, rotation: number, size: Size, pixelRatio: number, opacity: number, skippedFeaturesHash: { [key: string]: boolean }, featureCallback: ((param0: Feature | RenderFeature) => T), oneByOne: boolean, opt_hitExtent?: Extent): T;
    getDeleteResourcesFunction(context: WebGLContext): (() => void);
    finish(context: WebGLContext): void;
}
