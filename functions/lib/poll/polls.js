'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const functions = require('firebase-functions');
const express = require('express');
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
exports.pollFunction = functions.region('europe-west1').https.onRequest(app);
