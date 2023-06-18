function solution(participant, completion) {
  const participantObj = {};

  for (let i = 0; i < participant.length; i++) {
    const name = participant[i];
    participantObj[name] = participantObj[name] ? participantObj[name] + 1 : 1;
  }

  for (let i = 0; i < completion.length; i++) {
    const name = completion[i];
    participantObj[name] -= 1;
  }

  for (let name in participantObj) {
    if (participantObj[name] > 0) {
      return name;
    }
  }
}
