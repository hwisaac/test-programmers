const filePath = process.platform === 'linux' ? 0 : './baekjoon/input.txt';
let input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);
  class Robot {
    direction;
    position;
    board;

    constructor(n) {
      this.direction = 'r';
      this.position = [0, 0];
      this.board = new Array(n);

      for (let i = 0; i < n; i++) {
        this.board[i] = new Array(n).fill(0);
      }
    }

    go() {
      if (this.isStucked)
        return console.log(
          `막다른 길(${this.direction}, 위치:${this.position.toString()})`
        );
      const [x,y] = this.position;

      switch (this.direction) {
        case 'r':
          this.position[0]++;
          return;
        case 'b':
          this.position[1]++;
          return;
        case 'l':
          this.position[0]--;
          return;
        case 't':
          this.position[1]--;
          return;
      }
    }

    turn() {
      switch (this.direction) {
        case 'r':
          this.direction = 'b';
          return;
        case 'b':
          this.direction = 'l';
          return;
        case 'l':
          this.direction = 't';
          return;
        case 't':
          this.direction = 'r';
          return;
      }
    }
    drop(n) {
      const [x,y] = this.position;
      this.board[y][x] = n;
    }

    get board() {
      return this.board;
    }
    get position() {
      return this.position;
    }

    get isStucked() {
      const [a,b] = this.nextPosition ;
      const end = this.board.length-1;
      if ( a < 0 || a > end || b < 0 || b > end )  return true;
      if (this.board[b][a] !== 0) return true;
      return false;
    }
    get nextPosition() {
      const [x,y] = this.position;
      switch (this.direction) {
        case 'r':
          return [x+1, y];
        case 'b':
          return [x, y+1];
        case 'l':
          return [x-1, y];
        case 't':
          return [x, y-1];
      }
    }
  }

  function solution(n) {
    const robot = new Robot(n);
    const board = robot.board;
    
    for ( let i = 1 ; i <= n**2 ; i++){
      robot.drop(i)
      if( robot.isStucked ){
        robot.turn();
      }
        robot.go()
    }
    return board;
  }
  solution(5);

