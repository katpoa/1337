// Given two strings, determine if second string is anagram of first
// all lowercase
// ['', '']
// ['anagram', 'nagaram']
// ['aaz', 'zza']
// ['awesome', 'awesom'] false

// O(3n) solution
function validAnagram(str1, str2) {

  let freq1 = {};
  let freq2 = {};
  if (str1.length !== str2.length) {
    return false;
  }
  str1 = str1.split('');
  str2 = str2.split('');
  for (let val of str1) {
    freq1[val] = (freq1[val] || 0) + 1;
  }
  for (let val of str2) {
    freq2[val] = (freq2[val] || 0) + 1;
  }
  for (let key in freq1) {
    if (!(key in freq2)) {
      return false;
    }
    if (freq1[key] !== freq2[key]) {
      return false;
    }
  }
  return true;
}

// O(2n) solution
function validAnagram(str1, str2) {

  let freq = {};
  if (str1.length !== str2.length) {
    return false;
  }
  for (let i = 0; i < str1.length; i++) {
    freq[str1[i]] ? freq[str1[i]]++ : freq[str1[i]] = 1;
  }
  for (let i = 0; i < str2.length; i++) {
    if (!freq[str2[i]]) {
      return false;
    }
    freq[str2[i]]--;
  }
  return true;
}




// {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
validAnagram('anagrams', 'nagaramm')
