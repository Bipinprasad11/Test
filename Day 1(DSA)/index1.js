function removeDuplicates(nums) {
    let i = 0;
    for (let j = 1; j < nums.length; j++) {
        if (nums[j] !== nums[i]) {
            i++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
}

console.log("Test 1:");
let nums1 = [1, 1, 2];
let k = removeDuplicates(nums1);
console.log("k =", k);
console.log("nums =", nums1.slice(0, k));