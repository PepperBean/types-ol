declare module 'ol/Overlay' {

  import { Coordinate } from 'ol/coordinate';
  import OverlayPositioning from 'ol/OverlayPositioning';
  import BaseObject from 'ol/Object';
  import { EventsKey } from 'ol/events';
  import { Size } from 'ol/size';
  import { Extent } from 'ol/extent';
  import { Pixel } from 'ol/pixel';
  import PluggableMap from 'ol/PluggableMap';
  import Event from 'ol/events/Event';
  import { ObjectEvent } from 'ol/Object';

  export interface Options {
    id?: number | string;
    element?: HTMLElement;
    offset?: number[];
    position?: Coordinate;
    positioning?: OverlayPositioning;
    stopEvent?: boolean;
    insertFirst?: boolean;
    autoPan?: boolean;
    autoPanAnimation?: PanOptions;
    autoPanMargin?: number;
    className?: string;
  }

  export default class Overlay extends BaseObject {
    constructor(options: Options);
    protected autoPan: boolean;
    protected autoPanAnimation: PanOptions;
    protected autoPanMargin: number;
    protected element: HTMLElement;
    protected id: number | string;
    protected insertFirst: boolean;
    protected mapPostrenderListenerKey: EventsKey;
    protected options: Options;
    protected rendered: any;
    protected stopEvent: boolean;
    protected getRect(element: HTMLElement, size: Size): Extent;
    protected handleElementChanged(): void;
    protected handleMapChanged(): void;
    protected handleOffsetChanged(): void;
    protected handlePositionChanged(): void;
    protected handlePositioningChanged(): void;
    protected panIntoView(): void;
    protected render(): void;
    protected setVisible(visible: boolean): void;
    protected updatePixelPosition(): void;
    protected updateRenderedPosition(pixel: Pixel, mapSize: Size): void;
    getElement(): HTMLElement;
    getId(): number | string;
    getMap(): PluggableMap;
    getOffset(): number[];
    getOptions(): Options;
    getPosition(): Coordinate;
    getPositioning(): OverlayPositioning;
    setElement(element: HTMLElement): void;
    setMap(map: PluggableMap): void;
    setOffset(offset: number[]): void;
    setPosition(position: Coordinate): void;
    setPositioning(positioning: OverlayPositioning): void;
    on(type: string | string[], listener: ((param0: any) => void)): EventsKey | EventsKey[];
    once(type: string | string[], listener: ((param0: any) => void)): EventsKey | EventsKey[];
    un(type: string | string[], listener: ((param0: any) => void)): void;
    on(type: 'change', listener: (evt: Event) => void): EventsKey;
    once(type: 'change', listener: (evt: Event) => void): EventsKey;
    un(type: 'change', listener: (evt: Event) => void): void;
    on(type: 'change:element', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:element', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:element', listener: (evt: ObjectEvent) => void): void;
    on(type: 'change:map', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:map', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:map', listener: (evt: ObjectEvent) => void): void;
    on(type: 'change:offset', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:offset', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:offset', listener: (evt: ObjectEvent) => void): void;
    on(type: 'change:position', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:position', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:position', listener: (evt: ObjectEvent) => void): void;
    on(type: 'change:positioning', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'change:positioning', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'change:positioning', listener: (evt: ObjectEvent) => void): void;
    on(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    once(type: 'propertychange', listener: (evt: ObjectEvent) => void): EventsKey;
    un(type: 'propertychange', listener: (evt: ObjectEvent) => void): void;
  }

  export interface PanOptions {
    duration?: number;
    easing?: ((param0: number) => number);
  }

}