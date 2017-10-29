export class Page {
  pid: String;
  name: String;
  wid: String;
  description: String;

  constructor(pid, name, wid, description) {
    this.pid = pid;
    this.name = name;
    this.wid = wid;
    this.description = description;
  }
}
