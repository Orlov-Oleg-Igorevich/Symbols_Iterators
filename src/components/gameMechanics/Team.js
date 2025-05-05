export default class Team {
  constructor() {
      this.members = new Set();
  }
  add(character) {
    if (this.members.has(character)) {
      throw new Error('This character is already in the team');
    }
    this.members.add(character);
  }

  addAll(...characters) {
    for (let character of characters) {
      this.add(character);
    }
  }
  toArray() {
    return Array.from(this.members);
  }
  [Symbol.iterator] = function () {
    return this.members.values();
  }
}