import * as functions from 'firebase-functions';
import * as express from 'express';
const app = express();

app.post('/', function (req, res) {
    res.send('Creating new poll.');
})
    .get('/', function (req, res) {
        res.send('List polls.');
    })
    .delete('/:id', function (req, res) {
        res.send('Delete poll with id ' + req.params.id + '.');
    });

export const pollFunction = functions.region('europe-west1').https.onRequest(app);
