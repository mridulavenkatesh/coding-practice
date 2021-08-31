const pairWithTargetSum = (arr, targetSum) => {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum === targetSum) {
      return [left, right];
    } else if (sum < targetSum) {
      left++;
    } else {
      right--;
    }
  }
};

console.log(pairWithTargetSum([1, 2, 3, 4, 6], 6));
