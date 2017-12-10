export class Page {
  pid: String;
  name: String;
  _websiteId: String;
  description: String;

  constructor(pid, name, wid, title) {
    this.pid = pid;
    this.name = name;
    this._websiteId = wid;
    this.description = title;
  }
}
