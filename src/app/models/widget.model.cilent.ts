export class Widget {
  wgid?: String;
  name?: String;
  widgetType: String;
  pid: String;
  size?: Number;
  text?: String;
  width?: String;
  url?: String;
  formatted?: Boolean;
  rows?: number;
  placeholder?: String;


  constructor(widgetId, widgetType, pageId) {
    this.wgid = widgetId;
    this.widgetType = widgetType;
    this.pid = pageId;
  }
}
