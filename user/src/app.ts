import * as express from 'express';
import * as cors from 'cors';
import {Request, Response} from 'express'
import * as amqp from 'amqplib/callback_api';
import {DataSource} from 'typeorm';
