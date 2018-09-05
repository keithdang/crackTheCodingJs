//Crack the coding
//1.1: check for unique string
//1.2: reverse a string
//1.4: anagrams
//1.7 set zeros to MXN
//1.8 check rotating string
const updateAnaMap = (anaMap, letter) => {
  if (anaMap[letter]) {
    anaMap[letter]++;
  } else {
    anaMap[letter] = 1;
  }
};
const anagramMap = (str1, str2) => {
  var isAnagram = false;
  var strLength = str1.length;
  if (str2.length === strLength) {
    isAnagram = true;
    var anaMap1 = {};
    var anaMap2 = {};
    for (var i = 0; i < strLength; i++) {
      updateAnaMap(anaMap1, str1.charAt(i));
      updateAnaMap(anaMap2, str2.charAt(i));
    }
    for (var key in anaMap1) {
      if (anaMap1[key] !== anaMap2[key]) {
        isAnagram = false;
      }
    }
  }

  console.log(str1 + " and " + str2 + " are anagrams?:" + isAnagram);
};
const anagramArray = (str1, str2) => {
  var word1 = str1.split("");
  var word2 = str2.split("");
  var isAnagram = false;
  if (word1.length === word2.length) {
    let wordLength = word1.length;
    for (var i = 0; i < wordLength; i++) {
      for (var j = 0; j < wordLength; j++) {
        if (word1[i] === word2[j]) {
          word2.splice(j, 1);
          break;
        }
      }
    }
    if (word2.length === 0) {
      isAnagram = true;
    }
  }
  if (isAnagram) {
    console.log(str1 + " and " + str2 + " are anagrams");
  } else {
    console.log(str1 + " and " + str2 + "are not anagrams");
  }
};
//checks if every character inside the string is unique
const uniqueString = value => {
  var valMap = {};
  var isUnique = true;
  for (var i = 0; i < value.length; i++) {
    if (valMap[value.charAt(i)]) {
      isUnique = false;
    } else {
      valMap[value.charAt(i)] = 1;
    }
  }
  console.log(value + "is unique?:" + isUnique);
};
const reverseString = value => {
  var revWord = "";
  for (var i = value.length; i >= 0; i--) {
    revWord += value.charAt(i);
  }
  console.log(revWord);
};
const anagramCompare = () => {
  var word1 = "lohelloophutr";
  var word2 = "phuolrtlloheo";
  console.time("someFunction");
  anagramArray(word1, word2);
  console.timeEnd("someFunction");
  console.time("someFunction2");
  anagramMap(word1, word2);
  console.timeEnd("someFunction2");
};
const createMxN = (m, n) => {
  var matrix = [];
  for (var i = 0; i < m; i++) {
    matrix.push([]);
    for (var j = 0; j < n; j++) {
      matrix[i].push(Math.floor(Math.random() * 10));
    }
  }
  return matrix;
};
const setZeroMatrix = matrix => {
  var arrZeros = [];
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        arrZeros.push([i, j]);
      }
    }
  }
  for (var y = 0; y < arrZeros.length; y++) {
    for (var k = 0; k < matrix.length; k++) {
      //kmax=3,vert
      matrix[k][arrZeros[y][1]] = 0;
    }
    for (var x = 0; x < matrix[0].length; x++) {
      //kmax=4,hori
      matrix[arrZeros[y][0]][x] = 0;
    }
  }
};
const printMatrix = matrix => {
  for (var i = 0; i < matrix.length; i++) {
    console.log(matrix[i]);
  }
};
const startMatrix = () => {
  var matrix = [
    [1, 2, 0, 3], //0,2
    [1, 2, 3, 4],
    [1, 0, 3, 4]
  ];
  printMatrix(matrix);
  setZeroMatrix(matrix);
  printMatrix(matrix);
};
const checkRotatedString = (word1, word2) => {
  var isRotated = true;
  var strLen = word1.length;
  for (var i = 0; i < strLen; i++) {
    if (word2.charAt(i) === word1.charAt(0)) {
      if (
        word2.substring(i) === word1.substring(0, strLen - i) &&
        word2.substring(0, i) === word1.substring(strLen - i)
      ) {
        console.log("match");
      }
    }
  }
};
function start() {
  var word = "waterbottle";
  var rotWord = "ottlewaterb";
  checkRotatedString(word, rotWord);
}
module.exports = {
  start: start
};
