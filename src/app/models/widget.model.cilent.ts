export class Widget {
  wgid: String;
  widgetType: String;
  pid: String;
  size: number;
  text: String;

  constructor(websitId, widgetType, pageId) {
    this.wgid = websitId;
    this.widgetType = widgetType;
    this.pid = pageId;
    // this.size = size;
    // this.text = text;
  }
}
