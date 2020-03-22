import * as express from 'express';
import {Request, Response} from "firebase-functions";

export class PollController {

    public readonly _app = express()

    constructor() {
        this._app.post('/', this.createPoll)
            .get('/', this.listPolls)
            .delete('/:id', this.deletePoll);
    }

    public createPoll(request: Request, response: Response): void {
        response.send('Creating new poll.');
    }

    public listPolls(request: Request, response: Response): void {
        response.send('Creating new poll.');
    }

    public deletePoll(request: Request, response: Response): void {
        response.send(`Delete poll with id ${request.params.id}.`);
    }
}