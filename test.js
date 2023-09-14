function areNumbersSequential(arr) {
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + 1 !== arr[i + 1]) {
      return false;
    }
  }

  return true;
}

function filterAndSortUnique(arr) {
  const uniqueSet = new Set(arr);

  const uniqueArr = [...uniqueSet].sort((a, b) => a - b);

  return uniqueArr;
}

function countElementRepetitions(arr) {
  const counts = {};

  arr.forEach((num) => {
    if (counts[num]) {
      counts[num]++;
    } else {
      counts[num] = 1;
    }
  });

  const result = Object.keys(counts).map((key) => ({ [key]: counts[key] }));

  return result;
}

// areNumbersSequential
console.log(areNumbersSequential([5, 2, 3, 1, 4])); // true
console.log(areNumbersSequential([34, 23, 52, 12, 3])); // false
console.log(areNumbersSequential([7, 6, 5, 5, 3, 4])); // false


// filterAndSortUnique
console.log(filterAndSortUnique([1, 3, 2, 2, 4, 3, 5, 6, 5])); // [1, 2, 3, 4, 5, 6]
console.log(filterAndSortUnique([9, 9, 9, 9, 9])); // [9]
console.log(filterAndSortUnique([1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5]


// countElementRepetitions
console.log(countElementRepetitions([1, 3, 2, 2, 4, 3, 5, 6, 5])); // [{ '1': 1 }, { '3': 2 }, { '2': 2 }, { '4': 1 }, { '5': 2 }, { '6': 1 }]
