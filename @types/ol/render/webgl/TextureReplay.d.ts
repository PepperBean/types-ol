import { Extent } from '../../extent';
import WebGLContext from '../../webgl/Context';
import WebGLReplay from './Replay';
import Locations from './texturereplay/defaultshader/Locations';

export default class WebGLTextureReplay extends WebGLReplay {
    constructor(tolerance: number, maxExtent: Extent);
    protected hitDetectionGroupIndices: number[];
    protected anchorX: number;
    protected scale: number;
    protected defaultLocations: Locations;
    protected rotation: number;
    protected rotateWithView: boolean;
    protected originY: number;
    protected originX: number;
    protected groupIndices: number[];
    protected height: number;
    protected anchorY: number;
    protected imageHeight: number;
    protected imageWidth: number;
    protected opacity: number;
    protected width: number;
    protected getTextures(opt_all?: boolean): WebGLTexture[];
    protected getHitDetectionTextures(): WebGLTexture[];
    protected drawReplaySkipping(gl: WebGLRenderingContext, context: WebGLContext, skippedFeaturesHash: { [key: string]: boolean }, textures: WebGLTexture[], groupIndices: number[]): void;
    protected drawCoordinates(flatCoordinates: number[], offset: number, end: number, stride: number): number;
    protected createTextures(textures: WebGLTexture[], images: any[], texturePerImage: { [key: string]: WebGLTexture }, gl: WebGLRenderingContext): void;
}
