const filePath = process.platform === 'linux' ? 0 : './baekjoon/input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');

console.log(input.length);

const cardValue = {
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  T: 10,
  J: 11,
  Q: 12,
  K: 13,
  A: 14,
};

function solution(input) {}

const hands1 = input[0].split(' ').slice(0, 5);
const hands2 = input[0].split(' ').slice(5, 10);

hands1; //?
hands2; //?

function getRank(hands) {}

function getInfo(card) {
  const value = card[0];
  const cardValue = {
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    T: 10,
    J: 11,
    Q: 12,
    K: 13,
    A: 14,
  };
  const valueSuit = {

  }
  return [cardValue[card[0]], suit = card[1]];
}

getInfo('K3') //?

function countPairs(hands) {
  const dict = {};
  for (card of hands) {
    const [value, suit] = card.split('');

    if (!dict[value]) {
      dict[value] = 1;
    } else {
      dict[value]++;
    }
  }
  return dict;
}
function hands(handsString) {
  return handsString.split(' ')
}
countPairs(hands('5H 5C 6S 6S 6D')) //?

function isBig(target, compare) {
  cardValue[target[0]];
  cardValue[compare[0]];
  return cardValue[target[0]] > cardValue[compare[0]];
}

isBig('5D', 'KD') //?