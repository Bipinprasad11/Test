function flattenArray(arr) {
  let result = [];
  
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    if (Array.isArray(item)) {
      for (let j = 0; j < item.length; j++) {
        result.push(item[j]);
      }
    } else {
      result.push(item);
    }
  }
  return result;
}

let input = [1, 2, [5, 4], 3, [5], [93, 8, 2]];
let output = flattenArray(input);

console.log("Input:", input);
console.log("Output:", output);
