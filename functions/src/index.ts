import * as functions from 'firebase-functions';
import { pollFunction } from './poll/polls';

export const polls = pollFunction;

export const helloWorld = functions.region('europe-west1').https.onRequest((request, response) => {
    response.send('Hello from Firebase!');
});
