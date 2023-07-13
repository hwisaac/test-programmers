const fs = require('fs');

function parseCard(card) {
  const value = card.slice(0, -1);
  const suit = card.slice(-1);
  return { value, suit };
}

function getCardRank(card) {
  const values = {
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
  return values[card.value];
}

function compareHands(player1, player2) {
  const player1Rank = getHandRank(player1);
  const player2Rank = getHandRank(player2);
  player1Rank;
  player2Rank;
  if (player1Rank !== player2Rank) {
    return player1Rank > player2Rank ? 1 : 2;
  }
  player1;
  player1.map(getCardRank); //?

  const player1Values = quickSort(player1.map(getCardRank)); //?
  const player2Values = quickSort(player2.map(getCardRank));

  for (let i = 0; i < player1Values.length; i++) {
    if (player1Values[i] !== player2Values[i]) {
      return player1Values[i] > player2Values[i] ? 1 : 2;
    }
  }

  return 0;
}

function getHandRank(hand) {
  const suits = new Set(hand.map((card) => card.suit));
  const values = quickSort(hand.map(getCardRank));
  values; //?
  const isFlush = suits.size === 1;
  const isStraight = values[0] - values[4] === 4 && new Set(values).size === 5; //?
  const isRoyalFlush = isFlush && isStraight && values[0] === 14;
  const isStraightFlush = isFlush && isStraight;

  if (isRoyalFlush) return 9; // 로티플
  if (isStraightFlush) return 8; // 스티플

  // 카드 세기
  const valueCounts = new Map();
  values.forEach((value) => {
    valueCounts.set(value, (valueCounts.get(value) || 0) + 1);
  });

  const counts = quickSort([...valueCounts.values()]);

  if (counts[0] === 4) return 7; // 포카드
  if (counts[0] === 3 && counts[1] === 2) return 6; // 풀하우스
  if (isFlush) return 5; // 플러쉬
  if (isStraight) return 4; //스트레이트
  if (counts[0] === 3) return 3; // 트리플
  if (counts[0] === 2 && counts[1] === 2) return 2; // 투페어
  if (counts[0] === 2) return 1; // 원페어

  return 0;
}

function countPlayer1Wins() {
  const fileData = fs.readFileSync('poker.txt', 'utf-8');
  const hands = fileData.trim().split('\n');
  let player1Wins = 0;

  for (const hand of hands) {
    const cards = hand.split(' ');
    const player1 = cards.slice(0, 5).map(parseCard);
    const player2 = cards.slice(5).map(parseCard);

    if (compareHands(player1, player2) === 1) {
      player1Wins++;
    }
  }

  return player1Wins;
}

console.log(countPlayer1Wins());

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[Math.floor(arr.length / 2)];
  const less = [];
  const equal = [];
  const greater = [];

  for (let num of arr) {
    if (num < pivot) {
      less.push(num);
    } else if (num > pivot) {
      greater.push(num);
    } else {
      equal.push(num);
    }
  }

  return quickSort(greater).concat(equal, quickSort(less));
}
