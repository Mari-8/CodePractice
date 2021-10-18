function solution(str) {
  let letters = str.split("");
  let result = [];

  if (letters.length % 2 === 0) {
    for (let i = 0; i < letters.length; i += 1) {
      let fl = letters[i];
      let sl = letters[(i += 1)];
      let combine = fl + sl;

      result.push(combine);
    }
  } else if (letters.length % 2 !== 0) {
    letters.push("_");
    for (let i = 0; i < letters.length; i += 1) {
      let fl = letters[i];
      let sl = letters[(i += 1)];
      let combine = fl + sl;

      result.push(combine);
    }
  }

  return result;
}
