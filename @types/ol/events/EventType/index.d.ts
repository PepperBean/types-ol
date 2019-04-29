declare module 'ol/events/EventType' {

  enum EventType {
    CHANGE = 'change',
    CLEAR = 'clear',
    CONTEXTMENU = 'contextmenu',
    CLICK = 'click',
    DBLCLICK = 'dblclick',
    DRAGENTER = 'dragenter',
    DRAGOVER = 'dragover',
    DROP = 'drop',
    ERROR = 'error',
    KEYDOWN = 'keydown',
    KEYPRESS = 'keypress',
    LOAD = 'load',
    MOUSEDOWN = 'mousedown',
    MOUSEMOVE = 'mousemove',
    MOUSEOUT = 'mouseout',
    MOUSEUP = 'mouseup',
    MOUSEWHEEL = 'mousewheel',
    MSPOINTERDOWN = 'MSPointerDown',
    RESIZE = 'resize',
    TOUCHSTART = 'touchstart',
    TOUCHMOVE = 'touchmove',
    TOUCHEND = 'touchend',
    WHEEL = 'wheel',
  }

  export default EventType;

}