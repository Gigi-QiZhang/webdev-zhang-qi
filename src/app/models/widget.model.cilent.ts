export class Widget {
  wgid: String;
  name: String;
  widgetType: String;
  pid: String;
  size: Number;
  text: String;
  width: String;
  url: String;
  formatted?: Boolean;
  rows?: number;
  placeholder?: String;

  constructor (name, _id, widgetType, pageId, size, text, width, url) {
    this.name = name;
    this.wgid = _id;
    this.widgetType = widgetType;
    this.pid = pageId;
    this.size = size;
    this.text = text;
    this.width = width;
    this.url = url;
  }

  // constructor(widgetId, widgetType, pageId) {
  //   this.wgid = widgetId;
  //   this.widgetType = widgetType;
  //   this.pid = pageId;
  // }
}
