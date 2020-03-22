const functions = require('firebase-functions');

const polls = require("./src/poll/polls")
exports.polls = polls.function

exports.helloWorld = functions
	.region("europe-west1")
	.https
	.onRequest((request, response) => {
		response.send("Hello from Firebase!");
	});
