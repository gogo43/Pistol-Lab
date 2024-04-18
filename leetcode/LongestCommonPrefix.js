/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0 || strs.length === 1) {
    return strs[0]; // Return the array itself as a single subarray
  }

    var arr=[]
    for( var i=0 ; i < strs.length ; i++)
    {
        for (var j =1; j <=strs[i].length;j++){  
            arr.push(strs[i].slice(0,j))
        }
    } 
    const wordCounts = {};

  for (const word of arr) {
    if (wordCounts[word]) {
      wordCounts[word]++; // Increment count if word exists
    } else {
      wordCounts[word] = 1; // Initialize count to 1 for new words
    }
  }
  
  const wordsFound = [];

  for (const word in wordCounts) {
    if (wordCounts[word] === strs.length) {
      wordsFound.push(word);
    }
  }
  if (wordsFound.length !==0 ){

    var g =wordsFound.length
  return wordsFound[g-1]}
  
  else{
    return""
  }
};
