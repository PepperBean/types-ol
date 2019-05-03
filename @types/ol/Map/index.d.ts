declare module 'ol/Map' {

  import { EventsKey } from 'ol/events';
  import Event from 'ol/events/Event';
  import MapBrowserEvent from 'ol/MapBrowserEvent';
  import MapEvent from 'ol/MapEvent';
  import { ObjectEvent } from 'ol/Object';
  import PluggableMap, { MapOptions } from 'ol/PluggableMap';
  import RenderEvent from 'ol/render/Event';

  export default class Map extends PluggableMap {
    constructor(options: MapOptions);
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

}
