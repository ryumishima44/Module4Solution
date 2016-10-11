(function(windowparam){
	var speakWord = "Hello";
	var helloSpeaker={};
	helloSpeaker.speak= function (name) {
						  console.log(speakWord + " " + name);
						}
	windowparam.helloSpeaker=helloSpeaker;
})(window);
