export class Widget {
  wgid: String;
  widgetType: String;
  pid: String;
  size: Number;
  text: String;

  constructor(websiteId, widgetType, pageId) {
    this.wgid = websiteId;
    this.widgetType = widgetType;
    this.pid = pageId;
    // this.size = size;
    // this.text = text;
  }
}
