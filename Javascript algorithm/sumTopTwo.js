const sumTopTwo = (arr) => {
  const sortedArr = arr.sort((a, b) => {
    return b - a;
  });
  const result = sortedArr[0] + sortedArr[1];
  return result;
};

const testSumTopTwo = () => {
  // Test case 1
  const arr1 = [1, 5, 3, 8, 2];
  const result1 = sumTopTwo(arr1);
  console.log(result1 === 13 ? "Test case 1 passed" : "Test case 1 failed");

  // Test case 2
  const arr2 = [-2, -8, -5, -3, -1];
  const result2 = sumTopTwo(arr2);
  console.log(result2 === -3 ? "Test case 2 passed" : "Test case 2 failed");

  // Test case 3
  const arr3 = [4];
  const result3 = sumTopTwo(arr3);
  console.log(isNaN(result3) ? "Test case 3 passed" : "Test case 3 failed");
};

// Run the test
testSumTopTwo();
