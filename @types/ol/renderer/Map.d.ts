import { Coordinate } from '../coordinate';
import Disposable from '../Disposable';
import { FeatureLike } from '../Feature';
import BaseLayer from '../layer/Base';
import Layer, { State } from '../layer/Layer';
import { Pixel } from '../pixel';
import PluggableMap, { FrameState } from '../PluggableMap';
import EventType from '../render/EventType';
import LayerRenderer from './Layer';

export function sortByZIndex(state1: State, state2: State): number;
export default class MapRenderer extends Disposable {
    constructor(map: PluggableMap);
    protected calculateMatrices2D(frameState: FrameState): void;
    protected scheduleRemoveUnusedLayerRenderers(frameState: FrameState): void;
    protected scheduleExpireIconCache(frameState: FrameState): void;
    protected getLayerRenderers(): { [key: string]: LayerRenderer };
    protected getLayerRenderer(layer: BaseLayer): LayerRenderer;
    protected getLayerRendererByKey(layerKey: string): LayerRenderer;
    forEachLayerAtPixel<S, T, U>(pixel: Pixel, frameState: FrameState, hitTolerance: number, callback: ((this: S, param1: Layer, param2: Uint8ClampedArray | Uint8Array) => T), thisArg: S, layerFilter: ((this: U, param1: Layer) => boolean), thisArg2: U): T;
    dispatchRenderEvent(type: EventType, frameState: FrameState): void;
    hasFeatureAtCoordinate<U>(coordinate: Coordinate, frameState: FrameState, hitTolerance: number, layerFilter: ((this: U, param1: Layer) => boolean), thisArg: U): boolean;
    registerLayerRenderers(constructors: LayerRenderer[]): void;
    removeLayerRenderers(): void;
    renderFrame(frameState: FrameState): void;
    forEachFeatureAtCoordinate<S, T, U>(coordinate: Coordinate, frameState: FrameState, hitTolerance: number, callback: ((this: S, param1: FeatureLike, param2: Layer) => T), thisArg: S, layerFilter: ((this: U, param1: Layer) => boolean), thisArg2: U): T;
    getMap(): PluggableMap;
}
