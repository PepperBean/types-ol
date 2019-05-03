declare module 'ol/PluggableMap' {

  import Collection from 'ol/Collection';
  import Control from 'ol/control/Control';
  import { Coordinate } from 'ol/coordinate';
  import { EventsKey } from 'ol/events';
  import Event from 'ol/events/Event';
  import { Extent } from 'ol/extent';
  import Feature, { FeatureLike } from 'ol/Feature';
  import Interaction from 'ol/interaction/Interaction';
  import BaseLayer from 'ol/layer/Base';
  import LayerGroup from 'ol/layer/Group';
  import Layer, { State as State_1 } from 'ol/layer/Layer';
  import MapBrowserEvent from 'ol/MapBrowserEvent';
  import MapEvent from 'ol/MapEvent';
  import BaseObject, { ObjectEvent } from 'ol/Object';
  import Overlay from 'ol/Overlay';
  import { Pixel } from 'ol/pixel';
  import RenderEvent from 'ol/render/Event';
  import MapRenderer from 'ol/renderer/Map';
  import { Size } from 'ol/size';
  import Tile from 'ol/Tile';
  import TileQueue from 'ol/TileQueue';
  import TileRange from 'ol/TileRange';
  import { Transform } from 'ol/transform';
  import View, { State } from 'ol/View';

  export interface AtPixelOptions {
    layerFilter: ((param0: Layer) => boolean);
    hitTolerance?: number;
  }

  export interface FrameState {
    pixelRatio: number;
    time: number;
    viewState: State;
    animate: boolean;
    coordinateToPixelTransform: Transform;
    extent: Extent;
    focus: Coordinate;
    index: number;
    layerStates: { [key: string]: State_1 };
    layerStatesArray: State_1[];
    pixelToCoordinateTransform: Transform;
    postRenderFunctions: PostRenderFunction[];
    size: Size;
    skippedFeatureUids: { [key: string]: boolean };
    tileQueue: TileQueue;
    usedTiles: { [key: string]: { [key: string]: TileRange } };
    viewHints: number[];
    wantedTiles: { [key: string]: { [key: string]: boolean } };
  }

  export interface MapOptions {
    controls?: Collection<Control> | Control[];
    pixelRatio?: number;
    interactions?: Collection<Interaction> | Interaction[];
    keyboardEventTarget?: HTMLElement | Document | string;
    layers?: BaseLayer[] | Collection<BaseLayer> | LayerGroup;
    maxTilesLoading?: number;
    loadTilesWhileAnimating?: boolean;
    loadTilesWhileInteracting?: boolean;
    moveTolerance?: number;
    overlays?: Collection<Overlay> | Overlay[];
    target?: HTMLElement | string;
    view?: View;
  }

  export interface MapOptionsInternal {
    controls?: Collection<Control>;
    interactions?: Collection<Interaction>;
    keyboardEventTarget: HTMLElement | Document;
    overlays: Collection<Overlay>;
    values: { [key: string]: any };
  }

  export default class PluggableMap extends BaseObject {
    constructor(options: MapOptions);
    protected controls: Collection<Control>;
    protected interactions: Collection<Interaction>;
    protected handlePostRender(): void;
    addControl(control: Control): void;
    addInteraction(interaction: Interaction): void;
    addLayer(layer: BaseLayer): void;
    addOverlay(overlay: Overlay): void;
    createRenderer(): MapRenderer;
    forEachFeatureAtPixel<S, T>(pixel: Pixel, callback: ((this: S, param1: FeatureLike, param2: Layer) => T), opt_options?: AtPixelOptions): T;
    forEachLayerAtPixel<S, T>(pixel: Pixel, callback: ((this: S, param1: Layer, param2: Uint8ClampedArray | Uint8Array) => T), opt_options?: AtPixelOptions): T;
    getControls(): Collection<Control>;
    getCoordinateFromPixel(pixel: Pixel): Coordinate;
    getEventCoordinate(event: Event): Coordinate;
    getEventPixel(event: Event | TouchEvent): Pixel;
    getFeaturesAtPixel(pixel: Pixel, opt_options?: AtPixelOptions): FeatureLike[];
    getInteractions(): Collection<Interaction>;
    getLayerGroup(): LayerGroup;
    getLayers(): Collection<BaseLayer>;
    getOverlayById(id: string | number): Overlay;
    getOverlayContainer(): HTMLElement;
    getOverlayContainerStopEvent(): HTMLElement;
    getOverlays(): Collection<Overlay>;
    getPixelFromCoordinate(coordinate: Coordinate): Pixel;
    getRenderer(): MapRenderer;
    getSize(): Size;
    getTarget(): HTMLElement | string;
    getTargetElement(): HTMLElement;
    getTilePriority(tile: Tile, tileSourceKey: string, tileCenter: Coordinate, tileResolution: number): number;
    getView(): View;
    getViewport(): HTMLElement;
    handleBrowserEvent(browserEvent: Event, opt_type?: string): void;
    handleMapBrowserEvent(mapBrowserEvent: MapBrowserEvent): void;
    hasFeatureAtPixel<U>(pixel: Pixel, opt_options?: AtPixelOptions): boolean;
    isRendered(): boolean;
    removeControl(control: Control): Control;
    removeInteraction(interaction: Interaction): Interaction;
    removeLayer(layer: BaseLayer): BaseLayer;
    removeOverlay(overlay: Overlay): Overlay;
    render(): void;
    renderSync(): void;
    setLayerGroup(layerGroup: LayerGroup): void;
    setSize(size: Size): void;
    setTarget(target: HTMLElement | string): void;
    setView(view: View): void;
    skipFeature(feature: Feature): void;
    unskipFeature(feature: Feature): void;
    updateSize(): void;
    on(type: string | string[], listener: ((param0: any) => void)): EventsKey | EventsKey[];
    once(type: string | string[], listener: ((param0: any) => void)): EventsKey | EventsKey[];
    un(type: string | string[], listener: ((param0: any) => void)): void;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): void;
    on(type: 'change:layerGroup', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:layerGroup', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:layerGroup', listener: (evt: ObjectEvent) => void): void;
    on(type: 'change:size', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:size', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:size', listener: (evt: ObjectEvent) => void): void;
    on(type: 'change:target', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:target', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:target', listener: (evt: ObjectEvent) => void): void;
    on(type: 'change:view', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:view', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:view', listener: (evt: ObjectEvent) => void): void;
    on(type: 'click', listener: (evt: MapBrowserEvent) => void): EventsKey;
    once(type: 'click', listener: (evt: MapBrowserEvent) => void): EventsKey;
    un(type: 'click', listener: (evt: MapBrowserEvent) => void): void;
    on(type: 'dblclick', listener: (evt: MapBrowserEvent) => void): EventsKey;
    once(type: 'dblclick', listener: (evt: MapBrowserEvent) => void): EventsKey;
    un(type: 'dblclick', listener: (evt: MapBrowserEvent) => void): void;
    on(type: 'moveend', listener: (evt: MapEvent) => void): EventsKey;
    once(type: 'moveend', listener: (evt: MapEvent) => void): EventsKey;
    un(type: 'moveend', listener: (evt: MapEvent) => void): void;
    on(type: 'movestart', listener: (evt: MapEvent) => void): EventsKey;
    once(type: 'movestart', listener: (evt: MapEvent) => void): EventsKey;
    un(type: 'movestart', listener: (evt: MapEvent) => void): void;
    on(type: 'pointerdrag', listener: (evt: MapBrowserEvent) => void): EventsKey;
    once(type: 'pointerdrag', listener: (evt: MapBrowserEvent) => void): EventsKey;
    un(type: 'pointerdrag', listener: (evt: MapBrowserEvent) => void): void;
    on(type: 'pointermove', listener: (evt: MapBrowserEvent) => void): EventsKey;
    once(type: 'pointermove', listener: (evt: MapBrowserEvent) => void): EventsKey;
    un(type: 'pointermove', listener: (evt: MapBrowserEvent) => void): void;
    on(type: 'postcompose', listener: (evt: RenderEvent) => void): EventsKey;
    once(type: 'postcompose', listener: (evt: RenderEvent) => void): EventsKey;
    un(type: 'postcompose', listener: (evt: RenderEvent) => void): void;
    on(type: 'postrender', listener: (evt: MapEvent) => void): EventsKey;
    once(type: 'postrender', listener: (evt: MapEvent) => void): EventsKey;
    un(type: 'postrender', listener: (evt: MapEvent) => void): void;
    on(type: 'precompose', listener: (evt: RenderEvent) => void): EventsKey;
    once(type: 'precompose', listener: (evt: RenderEvent) => void): EventsKey;
    un(type: 'precompose', listener: (evt: RenderEvent) => void): void;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): void;
    on(type: 'rendercomplete', listener: (evt: RenderEvent) => void): EventsKey;
    once(type: 'rendercomplete', listener: (evt: RenderEvent) => void): EventsKey;
    un(type: 'rendercomplete', listener: (evt: RenderEvent) => void): void;
    on(type: 'singleclick', listener: (evt: MapBrowserEvent) => void): EventsKey;
    once(type: 'singleclick', listener: (evt: MapBrowserEvent) => void): EventsKey;
    un(type: 'singleclick', listener: (evt: MapBrowserEvent) => void): void;
  }

  export type PostRenderFunction = ((param0: PluggableMap, param1?: FrameState) => boolean);

}
