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
    board[pos.y][pos.x + 2] = '┐';
    board[pos.y - 1][pos.x + 2] = '└';
    board[pos.y - 1][pos.x + 3] = '─';
    board[pos.y - 1][pos.x + 4] = '┘';
    board[pos.y][pos.x + 4] = '│';
    board[pos.y + 1][pos.x + 4] = '┌';
    board[pos.y + 1][pos.x + 5] = '─';
    board[pos.y + 1][pos.x + 6] = '┐';
    board[pos.y][pos.x + 6] = '└';
    board[pos.y][pos.x + 7] = '─';

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
      board[pos.y][pos.x + 8] = '─';
    }
    if (params && params.end2 === 'up') {
      board[pos.y][pos.x + 8] = '┘';
    }
    if (params && params.end2 === 'down') {
      board[pos.y][pos.x + 8] = '┐';
    }
  } else if (type === 'left') {
    board[pos.y][pos.x - 1] = '─';
    board[pos.y][pos.x - 2] = '└';
    board[pos.y + 1][pos.x - 2] = '┐';
    board[pos.y + 1][pos.x - 3] = '─';
    board[pos.y + 1][pos.x - 4] = '┌';
    board[pos.y][pos.x - 4] = '│';
    board[pos.y - 1][pos.x - 4] = '┘';
    board[pos.y - 1][pos.x - 5] = '─';
    board[pos.y - 1][pos.x - 6] = '└';
    board[pos.y][pos.x - 6] = '┐';
    board[pos.y][pos.x - 7] = '─';

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
      board[pos.y][pos.x - 8] = '─';
    }
    if (params && params.end2 === 'up') {
      board[pos.y][pos.x - 8] = '└';
    }
    if (params && params.end2 === 'down') {
      board[pos.y][pos.x - 8] = '┌';
    }
  } else if (type === 'up') {
    board[pos.y + 1][pos.x] = '┌';
    board[pos.y + 1][pos.x + 1] = '─';
    board[pos.y + 1][pos.x + 2] = '┘';
    board[pos.y + 2][pos.x + 2] = '┐';
    board[pos.y + 2][pos.x + 1] = '─';
    board[pos.y + 2][pos.x] = '─';
    board[pos.y + 2][pos.x - 1] = '─';
    board[pos.y + 2][pos.x - 2] = '└';
    board[pos.y + 3][pos.x - 2] = '┌';
    board[pos.y + 3][pos.x - 1] = '─';
    board[pos.y + 3][pos.x] = '┘';

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
      board[pos.y + 4][pos.x] = '┐';
    }
    if (params && params.end2 === 'right') {
      board[pos.y + 4][pos.x] = '┌';
    }
    if (params && params.end2 === 'up') {
      board[pos.y + 4][pos.x] = '│';
    }
  } else if (type === 'down') {
    board[pos.y - 1][pos.x] = '┘';
    board[pos.y - 1][pos.x - 1] = '─';
    board[pos.y - 1][pos.x - 2] = '┌';
    board[pos.y - 2][pos.x - 2] = '└';
    board[pos.y - 2][pos.x - 1] = '─';
    board[pos.y - 2][pos.x] = '─';
    board[pos.y - 2][pos.x + 1] = '─';
    board[pos.y - 2][pos.x + 2] = '┐';
    board[pos.y - 3][pos.x + 2] = '┘';
    board[pos.y - 3][pos.x + 1] = '─';
    board[pos.y - 3][pos.x] = '┌';

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
      board[pos.y - 4][pos.x] = '┘';
    }
    if (params && params.end2 === 'right') {
      board[pos.y - 4][pos.x] = '└';
    }
    if (params && params.end2 === 'down') {
      board[pos.y - 4][pos.x] = '│';
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
      currentPoint = { x: currentPoint.x - 8, y: currentPoint.y };
    } else if (queue[i].type === 'right') {
      currentPoint = { x: currentPoint.x + 8, y: currentPoint.y };
    } else if (queue[i].type === 'up') {
      currentPoint = { x: currentPoint.x, y: currentPoint.y + 4 };
    } else if (queue[i].type === 'down') {
      currentPoint = { x: currentPoint.x, y: currentPoint.y - 4 };
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

  let bufferX = 0;
  let bufferY = 0;
  if (queue[0].type === 'left' || queue[0].type === 'right') {
    bufferY = 1;
  } else if (queue[0].type === 'up' || queue[0].type === 'down') {
    bufferX = 2;
  }

  return { 
    pos: { x: Math.abs(lowestX) + bufferX, y: Math.abs(lowestY) + bufferY }, 
    w: (largestX - lowestX) + (bufferX * 2) + 1, 
    h: (largestY - lowestY) + (bufferY * 2) + 1
  };
}

const _minkowski = function(n, queue, type, params) {
  if (n <= 1) {
    // Add to queue
    queue.push({ type: type, params: params });
  } else {
    if (type === 'right') {
      _minkowski(n - 1, queue, 'right', { end1: params.end1, end2: 'down' });
      _minkowski(n - 1, queue, 'down', { end1: 'left', end2: 'right' });
      _minkowski(n - 1, queue, 'right', { end1: 'up', end2: 'up' });
      _minkowski(n - 1, queue, 'up', { end1: 'left', end2: 'up' });
      _minkowski(n - 1, queue, 'up', { end1: 'down', end2: 'right' });
      _minkowski(n - 1, queue, 'right', { end1: 'down', end2: 'down' });
      _minkowski(n - 1, queue, 'down', { end1: 'left', end2: 'right' });
      _minkowski(n - 1, queue, 'right', { end1: 'up', end2: params.end2 });
    } else if (type === 'down') {
      _minkowski(n - 1, queue, 'down', { end1: params.end1, end2: 'left' });
      _minkowski(n - 1, queue, 'left', { end1: 'up', end2: 'down' });
      _minkowski(n - 1, queue, 'down', { end1: 'right', end2: 'right' });
      _minkowski(n - 1, queue, 'right', { end1: 'up', end2: 'right' });
      _minkowski(n - 1, queue, 'right', { end1: 'left', end2: 'down' });
      _minkowski(n - 1, queue, 'down', { end1: 'left', end2: 'left' });
      _minkowski(n - 1, queue, 'left', { end1: 'up', end2: 'down' });
      _minkowski(n - 1, queue, 'down', { end1: 'right', end2: params.end2 });
    } else if (type === 'up') {
      _minkowski(n - 1, queue, 'up', { end1: params.end1, end2: 'right' });
      _minkowski(n - 1, queue, 'right', { end1: 'down', end2: 'up' });
      _minkowski(n - 1, queue, 'up', { end1: 'left', end2: 'left' });
      _minkowski(n - 1, queue, 'left', { end1: 'down', end2: 'left' });
      _minkowski(n - 1, queue, 'left', { end1: 'right', end2: 'up' });
      _minkowski(n - 1, queue, 'up', { end1: 'right', end2: 'right' });
      _minkowski(n - 1, queue, 'right', { end1: 'down', end2: 'up' });
      _minkowski(n - 1, queue, 'up', { end1: 'left', end2: params.end2 });
    } else if (type === 'left') {
      _minkowski(n - 1, queue, 'left', { end1: params.end1, end2: 'up' });
      _minkowski(n - 1, queue, 'up', { end1: 'right', end2: 'left' });
      _minkowski(n - 1, queue, 'left', { end1: 'down', end2: 'down' });
      _minkowski(n - 1, queue, 'down', { end1: 'right', end2: 'down' });
      _minkowski(n - 1, queue, 'down', { end1: 'up', end2: 'left' });
      _minkowski(n - 1, queue, 'left', { end1: 'up', end2: 'up' });
      _minkowski(n - 1, queue, 'up', { end1: 'right', end2: 'left' });
      _minkowski(n - 1, queue, 'left', { end1: 'down', end2: params.end2 });
    }
  }
}

const minkowski = function(n, type, params) {
  let queue = [];
  _minkowski(n, queue, type, params);

  const finalPoint = assignRelativePoints(queue);
  const dimensions = getDimensions(queue, finalPoint);

  for (let i = 0; i < queue.length; i++) {
    queue[i].pos = { x: dimensions.pos.x + queue[i].pos.x, y: dimensions.pos.y + queue[i].pos.y };
  }

  const board = createBoard(dimensions.w, dimensions.h); 
  drawCurves(queue, board, dimensions.pos);

  return board;
}

const draw = function(board) {
  var result = '\n ';
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      result += board[board.length - i - 1][j];
    }
    result += '\n ';
  }
  return result;
}

const create = function(n) {
  if (n === undefined || isNaN(n) || n < 0) {
    return '';
  }

  if (n === 0) {
    const board = createBoard(3, 1);
    board[0][0] = '─';
    board[0][1] = '─';
    board[0][2] = '─';
    return draw(board);
  }

  const board = minkowski(n, 'right', { end1: 'left', end2: 'right' });
  
  return draw(board);
}

module.exports = {
  create: create,
  minkowski: minkowski,
};