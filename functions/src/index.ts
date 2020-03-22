import * as functions from 'firebase-functions';
import {PollController} from "./poll/PollController";

export const polls = functions.region('europe-west1').https.onRequest((new PollController)._app);

export const helloWorld = functions.region('europe-west1').https.onRequest((request, response) => {
    response.send('Hello from Firebase!');
});
