function pigIt(str) {
  let words = str.split(" ");
  let pigLatinized = [];

  words.map((w) => {
    let firstLet = w[0];
    let word = w.slice(1);

    if (firstLet === "!" || firstLet === "?") {
      word = word + firstLet;
    } else {
      word = word + firstLet + "ay";
    }
    pigLatinized.push(word);
  });

  return pigLatinized.join(" ");
}

