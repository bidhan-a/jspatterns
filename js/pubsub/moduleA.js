define(function(require) {
	'use strict';
	
	var pubSub = require('pubsub/pubsub');
	var subscription;
	
	subscription = pubSub.subscribe('topica', function(data) {
		console.log('topica was published with data: ' + data);
		subscription.dispose();
	})
})