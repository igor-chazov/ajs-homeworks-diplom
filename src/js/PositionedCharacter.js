import Character from './Character';

export default class PositionedCharacter {
  constructor(character, side, position) {
    if (!(character instanceof Character)) {
      throw new Error('Персонаж должен быть экземпляром Персонажа или его дочерними элементами');
    }

    if (typeof position !== 'number') {
      throw new Error('Позиция должна быть числом');
    }

    this.character = character;
    this.side = side;
    this.position = position;
  }
}
