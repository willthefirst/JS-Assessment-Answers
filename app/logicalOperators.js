if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    or : function(a, b) {
    	if (a || b) {return true;};
    },

    and : function(a, b) {
    	if (a && b) {return true;};
    }
  };
});
