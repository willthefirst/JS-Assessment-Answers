if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        return arr.indexOf(item);
    },

    sum : function(arr) {
        var sum = 0;

        for (var i = 0; i < arr.length; i++) {
            sum += arr[i];
        }

        return sum;
    },

    remove : function(arr, item) {
        var new_array = [];

        for (var i = 0; i < arr.length; i++) {
            if (arr[i] !== item) {
                new_array.push(arr[i]);
            }
        }

        return new_array;
    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.pop();
        return arr;
    },

    concat : function(arr1, arr2) {
        return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
        arr.splice(index, 0, item);
        return arr;
    },

    count : function(arr, item) {
        var counter = 0;

        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === item) {
                counter++;
            }
        }

        return counter;
    },

    duplicates : function(arr) {
        var duplicates = [];
        arr.sort();

        var isIn = function(value, array) {
            for (var i = 0; i < array.length; i++)  {
                if (array[i] === value) {
                    return true;
                }
            }
            return false;
        };

        for (var i = 1; i < arr.length; i++) {
            if (arr[i] === arr[i-1] && !isIn(arr[i], duplicates)) {
                duplicates.push(arr[i]);
            }
        }

        return duplicates;
    },

    square : function(arr) {
        var squared = [];

        for (var i = 0; i < arr.length; i++) {
            squared.push((arr[i] * arr[i]));
        }

        return squared;
    },

    findAllOccurrences : function(arr, target) {
        var occurences = [];

        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === target) {
                occurences.push(i);
            }
        }

        return occurences;
    }
  };
});
