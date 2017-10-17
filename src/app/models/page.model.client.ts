export class Page {
  pid: String;
  name: String;
  wid: String;
  description: String;
  title: String;

  constructor(pid, name, wid, title) {
    this.pid = pid;
    this.name = name;
    this.wid = wid;
    this.title = title;
  }
}
