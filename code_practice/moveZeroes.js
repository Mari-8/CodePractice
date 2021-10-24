var moveZeros = function (arr) {
  let result = [];
  let numOfZeros = countZeros(arr);
  let noZeros = arr.filter((num) => num !== 0);

  result = noZeros;
  for (let i = 0; i < numOfZeros; i++) {
    result.push(0);
  }

  return result;
};

const countZeros = function (array) {
  var count = 0;
  for (var i = 0; i < array.length; ++i) {
    if (array[i] === 0) count++;
  }
  return count;
};
