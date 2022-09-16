import * as express from 'express';
import * as cors from 'cors';
import { Request, Response } from 'express';
import * as amqp from 'amqplib/callback_api';

import { Product } from './entity/product';

import { myDataSource } from './app-data-source';

myDataSource.initialize().then((db) => {
    const productRepository = db.getRepository(Product);
console.log('DB connected', productRepository);
}).catch(err => console.error('Error in connection \n', err)
)