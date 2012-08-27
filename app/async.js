if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
	async : function(value) {
		var deferred = jQuery.Deferred();
		deferred.resolve(value);
		return deferred.promise();
	},

	manipulateRemoteData : function(url) {
		var ret = [];
		var deferred = $.Deferred();

		$.ajax(url).done(function(response) {
			for (var i = 0; i < response.people.length; i++) {
				ret.push(response.people[i].name);
			}
			deferred.resolve(ret.sort());
		});
		return deferred.promise();
	}
  };
});
