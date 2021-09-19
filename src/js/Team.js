export default class Team {
  constructor() {
    this.characters = new Set();
  }

  add(character) {
    this.characters.add(character);
  }

  addAll(...characters) {
    for (const character of characters) {
      this.characters.add(character);
    }
  }

  toArray() {
    this.characters = Array.from(this.characters);
  }
}
