function rotateArray(nums, k) {
let n = nums.length;
  let starting = [];
  for (let i = n - k; i < n; i++) {
    starting.push(nums[i]);
  }

  let ending = [];
  for (let i = 0; i < n - k; i++) {
    ending.push(nums[i]);
  }

  return starting.concat(ending);
}

let nums = [1, 2, 3, 4, 5, 6, 7];
let k = 1;
console.log(rotateArray(nums, k));
