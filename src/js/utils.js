export function calcTileType(index, boardSize) {
  // TODO: write logic here
  if (index === 0) {
    return 'top-left';
  }
  if (index > 0 && index < boardSize - 1) {
    return 'top';
  }
  if (index === boardSize - 1) {
    return 'top-right';
  }
  if (index === (boardSize * boardSize) - 1) {
    return 'bottom-right';
  }
  if (index > boardSize * (boardSize - 1) && index < (boardSize * boardSize) - 1) {
    return 'bottom';
  }
  if (index % boardSize === boardSize - 1) {
    return 'right';
  }
  if (index === boardSize * (boardSize - 1)) {
    return 'bottom-left';
  }
  if (index % boardSize === 0) {
    return 'left';
  }

  return 'center';
}

export function calcHealthLevel(health) {
  if (health < 15) {
    return 'critical';
  }

  if (health < 50) {
    return 'normal';
  }

  return 'high';
}

export function tooltip(item) {
  const level = String.fromCodePoint(0x1F396);
  const attack = String.fromCodePoint(0x2694);
  const defence = String.fromCodePoint(0x1F6E1);
  const health = String.fromCodePoint(0x2764);
  return `${level}${item.level} ${attack}${item.attack} ${defence}${item.defence} ${health}${item.health}`;
}
