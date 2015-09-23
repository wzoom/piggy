(function (w) {
  'use strict';

  function pigLatin(source) {

    var lines = source.split(/\n/);
    var words;
    var result = '';

    lines.forEach(function(line){
      if (line.length > 0) {
        words = line.split(/\s/);
        words.forEach(function (word) {
          result += translateWord(word) + ' ';
        });
        result = result.trim();
      }
      result += "\n";
    });
    return result.trim();
  }


  var translateWord = function(word) {

    if (word.length === 0) {
      return word;
    }

    if (word.indexOf('-') > -1) {
      return word.split('-').map(translateWord).join('-');
    }

    var result = word;

    if (/.*way/.test(word)) {
      result = word;
    }
    else if (startsWithVowel(word)) {
      result = word + 'way';
    }
    else if (startsWithConsanant(word)) {
      result = word.substring(1, word.length) + word[0] + 'ay';
    }

    result = copyCase(word, result);
    result = copyPunctuation(word, result);

    return result;
  };





  var isUpper = function(char) {
    return char.charCodeAt(0) < 91;
  };

  var startsWithVowel = function(word) {
    return /[aeiou]/.test(word[0].toLowerCase());
  };


  var startsWithConsanant = function(word) {
    return /[qwrtypsdfghjklzxcvbnm]/.test(word[0].toLowerCase());
  };

  var copyCase = function(origin, dest) {
    var result = dest.split('');
    for (var i in origin.split('')) {
      result[i] = isUpper(origin[i]) ? result[i].toUpperCase() : result[i].toLowerCase();
    }
    return result.join('');
  };

  var copyPunctuation = function(origin, dest) {
    var punctRegExp = /['";<>(){}:'’,.\/?!\\-]/;
    if (!punctRegExp.test(origin)) return dest;

    origin = origin.split('').reverse();
    dest = dest.replace(punctRegExp, '').split('');
    dest.reverse();
    for (var i in origin) {
      if (punctRegExp.test(origin[i])) {
        dest.splice(i, 0, origin[i])
      }
    }
    return dest.reverse().join('');
  };

  w.piggy = pigLatin;

})(window);
