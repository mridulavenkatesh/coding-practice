const validAnagram  =(str1, str2) => {
    let freqCounter1 = new Map();
    let freqCounter2 = new Map();
    if(str1.length !== str2.length) return false;
    if(str1.length === 0 && str2.length === 0) return true;
    for(val in str1){
     if(freqCounter1.has(str1.charAt(val))) {
       const oldFrequency = freqCounter1.get(str1.charAt(val));
       freqCounter1.set(str1.charAt(val), oldFrequency + 1);
     } else {
       freqCounter1.set(str1.charAt(val), 1)
     }
    };
    for(val in str2){
     if(freqCounter2.has(str2.charAt(val))) {
       const oldFrequency = freqCounter2.get(str2.charAt(val));
       freqCounter2.set(str2.charAt(val), oldFrequency + 1);
     } else {
       freqCounter2.set(str2.charAt(val), 1)
     }
    }
    for(let i = 0; i < str1.length; i++){
      const firstFreq = freqCounter1.get(str1.charAt(i));
      const secFreq = freqCounter2.get(str1.charAt(i));
      if(firstFreq === secFreq) {
        return true;
      } else {
        return false;
      }
    }
  }
  
console.log(validAnagram('azza', 'zzaa'));
console.log(validAnagram('anagram', 'nagaram'));
console.log(validAnagram('rat', 'car'));
console.log(validAnagram('awesome', 'awesom'));