module.exports = function(S3Notifications) {

S3Notifications.beforeRemote('create',function(context, notification, next) {
	console.log("context",context.req.text);	    
	if ( context.req.is('text/*')) {
	      context.req.text = '';
	      context.req.setEncoding('utf8');
	      context.req.on('data', function(chunk){
		context.req.text += chunk;
	      }).on('end', function(){
			console.log("context",context.req.text);
	      });
	    } else {
	      next();
	    }

});

};
