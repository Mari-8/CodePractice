function wave(str) {
  let result = [];
  let word = str.toLowerCase().split("");

  for (let i = 0; i < word.length; i++) {
    if (word[i - 1]) {
      word[i - 1] = word[i - 1].toLowerCase();
    }
    if (word[i] === " ") {
      continue;
    }
    if (word[i]) {
      word[i] = word[i].toUpperCase();
      result.push(word.join(""));
    }
  }

  return result;
}
