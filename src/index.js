const LINES = {
  '─': {
    STANDARD: '─',
    BOLD: '━',
    DOUBLE: '═',
  },
  '│': {
    STANDARD: '│',
    BOLD: '┃',
    DOUBLE: '║',
  },
  '┌': {
    STANDARD: '┌',
    BOLD: '┏',
    DOUBLE: '╔',
  },
  '┐': {
    STANDARD: '┐',
    BOLD: '┓',
    DOUBLE: '╗',
  },
  '┘': {
    STANDARD: '┘',
    BOLD: '┛',
    DOUBLE: '╝',
  },
  '└': {
    STANDARD: '└',
    BOLD: '┗',
    DOUBLE: '╚',
  },
};

const getLine = function(lineId, lineType) {
  if (LINES[lineId] !== undefined && lineType !== undefined) {
    return LINES[lineId][lineType.toUpperCase()];
  } else if (LINES[lineId] !== undefined) {
    return LINES[lineId].STANDARD;
  } else {
    return ' ';
  }
}

const getLineType = function(line) {
  if (line !== undefined && (line.toLowerCase() === 'standard' || line.toLowerCase() === 'double' || line.toLowerCase() === 'bold')) {
    return line.toLowerCase();
  }
  return 'standard';
}

const isValidRotation = function(rotation) {
  return rotation !== undefined && (rotation.toLowerCase() === 'left' || rotation.toLowerCase() === 'right' || rotation.toLowerCase() === 'flip' || rotation.toLowerCase() === 'standard');
}

const createBoard = function(w, h) {
  let board = [];
  for (let i = 0; i < h; i++) {
    let row = [];
    for (let j = 0; j < w; j++) {
      row.push(' ');
    }
    board.push(row);
  }
  return board;
}

const drawCurve = function(board, pos, type, params) {
  if (type === 'right') {
    board[pos.y][pos.x + 1] = '─';

    if (params && params.end1 === 'left') {
      board[pos.y][pos.x] = '─';
    }
    if (params && params.end1 === 'up') {
      board[pos.y][pos.x] = '└';
    }
    if (params && params.end1 === 'down') {
      board[pos.y][pos.x] = '┌';
    }

    if (params && params.end2 === 'right') {
      board[pos.y][pos.x + 2] = '─';
    }
    if (params && params.end2 === 'up') {
      board[pos.y][pos.x + 2] = '┘';
    }
    if (params && params.end2 === 'down') {
      board[pos.y][pos.x + 2] = '┐';
    }
  } else if (type === 'left') {
    board[pos.y][pos.x - 1] = '─';

    if (params && params.end1 === 'right') {
      board[pos.y][pos.x] = '─';
    }
    if (params && params.end1 === 'up') {
      board[pos.y][pos.x] = '┘';
    }
    if (params && params.end1 === 'down') {
      board[pos.y][pos.x] = '┐';
    }

    if (params && params.end2 === 'left') {
      board[pos.y][pos.x - 2] = '─';
    }
    if (params && params.end2 === 'up') {
      board[pos.y][pos.x - 2] = '└';
    }
    if (params && params.end2 === 'down') {
      board[pos.y][pos.x - 2] = '┌';
    }
  } else if (type === 'up') {
    if (params && params.end1 === 'left') {
      board[pos.y][pos.x] = '┘';
    }
    if (params && params.end1 === 'right') {
      board[pos.y][pos.x] = '└';
    }
    if (params && params.end1 === 'down') {
      board[pos.y][pos.x] = '│';
    }

    if (params && params.end2 === 'left') {
      board[pos.y + 1][pos.x] = '┐';
    }
    if (params && params.end2 === 'right') {
      board[pos.y + 1][pos.x] = '┌';
    }
    if (params && params.end2 === 'up') {
      board[pos.y + 1][pos.x] = '│';
    }
  } else if (type === 'down') {
    if (params && params.end1 === 'left') {
      board[pos.y][pos.x] = '┐';
    }
    if (params && params.end1 === 'right') {
      board[pos.y][pos.x] = '┌';
    }
    if (params && params.end1 === 'up') {
      board[pos.y][pos.x] = '│';
    }

    if (params && params.end2 === 'left') {
      board[pos.y - 1][pos.x] = '┘';
    }
    if (params && params.end2 === 'right') {
      board[pos.y - 1][pos.x] = '└';
    }
    if (params && params.end2 === 'down') {
      board[pos.y - 1][pos.x] = '│';
    }
  }
}

const drawCurves = function(queue, board, pos) {
  for (let i = 0; i < queue.length; i++) {
    drawCurve(board, queue[i].pos, queue[i].type, queue[i].params);
  }
}

const assignRelativePoints = function(queue) {
  var currentPoint = { x: 0, y: 0 };
  for (let i = 0; i < queue.length; i++) {
    queue[i].pos = { x: currentPoint.x, y: currentPoint.y };
    if (queue[i].type === 'left') {
      currentPoint = { x: currentPoint.x - 2, y: currentPoint.y };
    } else if (queue[i].type === 'right') {
      currentPoint = { x: currentPoint.x + 2, y: currentPoint.y };
    } else if (queue[i].type === 'up') {
      currentPoint = { x: currentPoint.x, y: currentPoint.y + 1 };
    } else if (queue[i].type === 'down') {
      currentPoint = { x: currentPoint.x, y: currentPoint.y - 1 };
    }
  }
  return currentPoint;
}

const getDimensions = function(queue, finalPoint) {
  var lowestX = Number.MAX_VALUE;
  var lowestY = Number.MAX_VALUE;
  var largestX = Number.MIN_VALUE;
  var largestY = Number.MIN_VALUE;
  for (let i = 0; i < queue.length; i++) {
    if (queue[i].pos.x < lowestX) {
      lowestX = queue[i].pos.x;
    }
    if (queue[i].pos.y < lowestY) {
      lowestY = queue[i].pos.y;
    }

    if (queue[i].pos.x > largestX) {
      largestX = queue[i].pos.x;
    }
    if (queue[i].pos.y > largestY) {
      largestY = queue[i].pos.y;
    }
  }

  if (finalPoint.x < lowestX) {
    lowestX = finalPoint.x;
  }
  if (finalPoint.y < lowestY) {
    lowestY = finalPoint.y;
  }

  if (finalPoint.x > largestX) {
    largestX = finalPoint.x;
  }
  if (finalPoint.y > largestY) {
    largestY = finalPoint.y;
  }

  return { 
    pos: { x: Math.abs(lowestX), y: Math.abs(lowestY) }, 
    w: (largestX - lowestX) + 1, 
    h: (largestY - lowestY) + 1
  };
}

const getOppositeType = function(type) {
  if (type === 'down') {
    return 'up';
  } else if (type === 'left') {
    return 'right';
  } else if (type === 'up') {
    return 'down';
  } else if (type === 'right') {
    return 'left';
  }
  return 'none';
}

const addEndParams = function(queue, params) {
  for (let i = 0; i < queue.length; i++) {
    queue[i].params = {};

    if (i === 0) {
      queue[i].params.end1 = params && params.end1 ? params.end1 : getOppositeType(queue[i].type);
    } else {
      queue[i].params.end1 = getOppositeType(queue[i - 1].type);
    }

    if (i === queue.length - 1) {
      queue[i].params.end2 = params && params.end2 ? params.end2 : queue[i].type;
    } else {
      queue[i].params.end2 = queue[i + 1].type;
    }
  }
}

const _minkowski = function(n, queue, type, inverse=false) {
  if (n <= 0) {
    // Add to queue
    queue.push({ type: type });
  } else if (inverse) {
    if (type === 'right') {
      _minkowski(n - 1, queue, 'right');
      _minkowski(n - 1, queue, 'down');
      _minkowski(n - 1, queue, 'right');
      _minkowski(n - 1, queue, 'up');
      _minkowski(n - 1, queue, 'up');
      _minkowski(n - 1, queue, 'right');
      _minkowski(n - 1, queue, 'down');
      _minkowski(n - 1, queue, 'right');
    } else if (type === 'down') {
      _minkowski(n - 1, queue, 'down');
      _minkowski(n - 1, queue, 'left');
      _minkowski(n - 1, queue, 'down');
      _minkowski(n - 1, queue, 'right');
      _minkowski(n - 1, queue, 'right');
      _minkowski(n - 1, queue, 'down');
      _minkowski(n - 1, queue, 'left');
      _minkowski(n - 1, queue, 'down');
    } else if (type === 'up') {
      _minkowski(n - 1, queue, 'up');
      _minkowski(n - 1, queue, 'right');
      _minkowski(n - 1, queue, 'up');
      _minkowski(n - 1, queue, 'left');
      _minkowski(n - 1, queue, 'left');
      _minkowski(n - 1, queue, 'up');
      _minkowski(n - 1, queue, 'right');
      _minkowski(n - 1, queue, 'up');
    } else if (type === 'left') {
      _minkowski(n - 1, queue, 'left');
      _minkowski(n - 1, queue, 'up');
      _minkowski(n - 1, queue, 'left');
      _minkowski(n - 1, queue, 'down');
      _minkowski(n - 1, queue, 'down');
      _minkowski(n - 1, queue, 'left');
      _minkowski(n - 1, queue, 'up');
      _minkowski(n - 1, queue, 'left');
    }
  } else {
    if (type === 'right') {
      _minkowski(n - 1, queue, 'right');
      _minkowski(n - 1, queue, 'up');
      _minkowski(n - 1, queue, 'right');
      _minkowski(n - 1, queue, 'down');
      _minkowski(n - 1, queue, 'down');
      _minkowski(n - 1, queue, 'right');
      _minkowski(n - 1, queue, 'up');
      _minkowski(n - 1, queue, 'right');
    } else if (type === 'down') {
      _minkowski(n - 1, queue, 'down');
      _minkowski(n - 1, queue, 'right');
      _minkowski(n - 1, queue, 'down');
      _minkowski(n - 1, queue, 'left');
      _minkowski(n - 1, queue, 'left');
      _minkowski(n - 1, queue, 'down');
      _minkowski(n - 1, queue, 'right');
      _minkowski(n - 1, queue, 'down');
    } else if (type === 'up') {
      _minkowski(n - 1, queue, 'up');
      _minkowski(n - 1, queue, 'left');
      _minkowski(n - 1, queue, 'up');
      _minkowski(n - 1, queue, 'right');
      _minkowski(n - 1, queue, 'right');
      _minkowski(n - 1, queue, 'up');
      _minkowski(n - 1, queue, 'left');
      _minkowski(n - 1, queue, 'up');
    } else if (type === 'left') {
      _minkowski(n - 1, queue, 'left');
      _minkowski(n - 1, queue, 'down');
      _minkowski(n - 1, queue, 'left');
      _minkowski(n - 1, queue, 'up');
      _minkowski(n - 1, queue, 'up');
      _minkowski(n - 1, queue, 'left');
      _minkowski(n - 1, queue, 'down');
      _minkowski(n - 1, queue, 'left');
    }
  }
}

const minkowski = function(n, type, params, inverse=false) {
  let queue = [];
  _minkowski(n, queue, type, inverse);
  addEndParams(queue, params);

  const finalPoint = assignRelativePoints(queue);
  const dimensions = getDimensions(queue, finalPoint);

  for (let i = 0; i < queue.length; i++) {
    queue[i].pos = { x: dimensions.pos.x + queue[i].pos.x, y: dimensions.pos.y + queue[i].pos.y };
  }

  const board = createBoard(dimensions.w, dimensions.h); 
  drawCurves(queue, board, dimensions.pos);

  return board;
}

const draw = function(board, lineType) {
  var result = '\n ';
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      result += getLine(board[board.length - i - 1][j], lineType);
    }
    result += '\n ';
  }
  return result;
}

const create = function(n, config) {
  if (n === undefined || isNaN(n) || n < 0) {
    return '';
  }

  const inverse = config !== undefined && config.inverse === true;
  const rotate = config !== undefined && isValidRotation(config.rotate) ? config.rotate.toLowerCase() : 'standard';
  const lineType = config !== undefined ? getLineType(config.line) : undefined;

  let board;
  if (rotate === 'left') {
    board = minkowski(n, 'up', { end1: 'down', end2: 'up' }, inverse);
  } else if (rotate === 'right') {
    board = minkowski(n, 'down', { end1: 'up', end2: 'down' }, inverse);
  } else if (rotate === 'flip') {
    board = minkowski(n, 'left', { end1: 'right', end2: 'left' }, inverse);
  } else {
    board = minkowski(n, 'right', { end1: 'left', end2: 'right' }, inverse);
  }
  
  return draw(board, lineType);
}

module.exports = {
  create: create,
};