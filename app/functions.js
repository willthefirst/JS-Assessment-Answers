if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
        var greeting = arr[0];
        var name = arr[1];
        var punctuation = arr[2];

        return fn(greeting,name,punctuation);
    },

    speak : function(fn, obj) {
        var greeting = obj.greeting;
        var name = obj.name;

        return fn.call(obj);
    },

    functionFunction : function(str) {
        var func = function(str2) {
            return str + ', ' + str2;
        };

        return func;
    },

    makeClosures : function(arr, fn) {
        var arrSquared = [];

        var makeClosure = function(arrItem) {
            return function() {
                return fn(arrItem);
            };
        };

        for (var i = 0; i < arr.length; i++) {
            arrSquared.push(makeClosure(arr[i]));
        }

        return arrSquared;
    },

    partial : function(fn, str1, str2) {
        return function(str3) {
            return fn.apply( null, [str1, str2, str3]);
        };
    },

    useArguments : function() {
        var total = 0;

        for (var i = 0; i < arguments.length; i++) {
            total += arguments[i];
        }

        return total;
    },

    callIt : function(fn) {
        var args = [];

        for (var i = 1; i < arguments.length; i++) {
            args.push(arguments[i]);
        }
        return fn.apply(null, args);
    },

    curryIt : function(fn) {
        var args = Array.prototype.slice.call(arguments, 1, arguments.length);

        return function() {
            var otherArgs = Array.prototype.slice.call(arguments);
            return fn.apply(null, args.concat(otherArgs));
        };

    }
  };
});
