'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const functions = require('firebase-functions');
const polls_1 = require('./poll/polls');
exports.polls = polls_1.pollFunction;
exports.helloWorld = functions.region('europe-west1').https.onRequest((request, response) => {
    response.send('Hello from Firebase!');
});
