declare module 'ol/render/Event' {

  import Event from 'ol/events/Event';
  import EventType from 'ol/render/EventType';
  import VectorContext from 'ol/render/VectorContext';
  import { FrameState } from 'ol/PluggableMap';
  import WebGLContext from 'ol/webgl/Context';

  export default class RenderEvent extends Event {
    constructor(type: EventType, opt_vectorContext?: VectorContext, opt_frameState?: FrameState, opt_context?: CanvasRenderingContext2D, opt_glContext?: WebGLContext);
    context: CanvasRenderingContext2D;
    frameState: FrameState;
    glContext: WebGLContext;
    vectorContext: VectorContext;
  }

}