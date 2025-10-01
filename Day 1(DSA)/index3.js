function rotateVowel(s) {
  let vowels = "aeiouAEIOU";
  let arr = s.split("");

  const vowelList = [];
  for (let char of arr) {
    if (vowels.includes(char)) {
      vowelList.push(char);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (vowels.includes(arr[i])) {
      arr[i] = vowelList.pop();
    }
  }

  return arr.join("");
}

console.log(rotateVowel("IceCreAm"));