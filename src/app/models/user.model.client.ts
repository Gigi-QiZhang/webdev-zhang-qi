export class User {
  uid: String;
  username: String;
  password?: String;
  firstName: String;
  lastName: String;
  email: String;
  constructor(_id, username, password, firstName, lastName) {
    this.uid = _id;
    this.username = username;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
//
// export class User {
//   _id: String;
//   username: String;
//   password: String;
//   firstName: String;
//   lastName: String;
//   email: String;
//   constructor(_id, username, password, firstName, lastName) {
//     this._id = _id;
//     this.username = username;
//     this.password = password;
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
// }
