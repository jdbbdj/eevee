export default class User {
  name: String;
  // just add "default"
  //creates and requires "new" when called on other parts of code
  //this represents the overall of User class
  constructor(name) {
    this.name = name;
  }

  getUser() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }
}
