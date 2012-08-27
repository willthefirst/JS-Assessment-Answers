if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
        return !!str.match(/\d/);
    },

    containsRepeatingLetter : function(str) {
        return !!str.match(/(\w)\1/);
    },

    endsWithVowel : function(str) {
        return !!str.match(/[aeiou]$/);
    },

    captureThreeNumbers : function(str) {
      var matches = str.match(/\d{3}/);
      if (matches) {
        return matches[0];
      }
      return false;
    },

    matchesPattern : function(str) {
        return !!str.match(/^\d{3}-\d{3}-\d{4}$/);
    }
  };
});
