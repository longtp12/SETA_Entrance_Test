const mostCommonLengthStrings = (arr) => {
  const lengthCounts = arr.reduce((acc, str) => {
    const length = str.length;
    acc.set(length, (acc.get(length) || []).concat(str));
    return acc;
  }, new Map());
  // Spread the values of the map inside Math.max
  const maxCount = Math.max(
    ...[...lengthCounts.values()].map((strings) => strings.length)
  );
  const result = [...lengthCounts.values()]
    .filter((strings) => strings.length === maxCount)
    .flat();

  return result;
};

// Unit test function
function testMostCommonLengthStrings() {
  // Test case 1
  const arr1 = ["a", "ab", "abc", "cd", "def", "gh"];
  const result1 = mostCommonLengthStrings(arr1);
  console.log(
    JSON.stringify(result1) === JSON.stringify(["ab", "cd", "gh"])
      ? "Test case 1 passed"
      : "Test case 1 failed"
  );

  // Test case 2
  const arr2 = ["apple", "banana", "durian", "kiwi", "grape"];
  const result2 = mostCommonLengthStrings(arr2);
  console.log(
    JSON.stringify(result2) ===
      JSON.stringify(["apple", "grape", "banana", "durian"])
      ? "Test case 2 passed"
      : "Test case 2 failed"
  );

  // Test case 3 (empty array)
  const arr3 = [];
  const result3 = mostCommonLengthStrings(arr3);
  console.log(
    JSON.stringify(result3) === JSON.stringify([])
      ? "Test case 3 passed"
      : "Test case 3 failed"
  );

  // Test case 4 (array with one element)
  const arr4 = ["hello"];
  const result4 = mostCommonLengthStrings(arr4);
  console.log(
    JSON.stringify(result4) === JSON.stringify(["hello"])
      ? "Test case 4 passed"
      : "Test case 4 failed"
  );

  console.log("All test cases pass.");
}

// Run the test
testMostCommonLengthStrings();
