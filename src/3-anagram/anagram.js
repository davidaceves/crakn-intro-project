// Write a function that returns true if the two words are an anagram of eachother.
// anagram: a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.
exports.anagram = function (firstWord, secondWord) {
  let anagramDict = {};
  let count = 0;

  if (firstWord.length !== secondWord.length) {
    return false;
  }

  for (let i = 0; i < firstWord.length; i++) {
    if (anagramDict[firstWord[i]] === undefined) {
      anagramDict[firstWord[i]] = 0;
    }

    if (anagramDict[secondWord[i]] === undefined) {
      anagramDict[secondWord[i]] = 0;
    }

    anagramDict[firstWord[i]] += 1;
    anagramDict[secondWord[i]] += 1;
  }

  for (const value of Object.values(anagramDict)) {
    if (value % 2 === 0) {
      count += 1;
    }

    if (count === firstWord.length) {
      return true;
    }
  }

  return false;
};

exports.anagram("friend", "finder");
