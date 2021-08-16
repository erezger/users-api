import express, {Application} from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import {UsersService} from './services/users.services';
import {UsersController} from './controllers/users.controller';
import mongoose from 'mongoose';
import {MONGO} from './constants/users-api.constants';
import {handleErrors} from './middleware/error-handler.middleware';

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.setConfig();
    this.setMongoConfig();
    this.setControllers();
    this.setErrorHandlingMiddleware();
  }

  private setConfig() {
    // Allows us to receive requests with data in json format
    this.app.use(bodyParser.json({limit: "50mb"}));
    // Allows us to receive requests with data in x-www-form-urlencoded format
    this.app.use(bodyParser.urlencoded({limit: "50mb", extended: true}));
    // Enables cors
    this.app.use(cors());
  }

  private setMongoConfig() {
    // @ts-ignore
    mongoose.Promise = global.Promise;
    mongoose.connect(MONGO.url, MONGO.configuration).then(r => {
      console.log('mongoose is now connected');
    }).catch(err =>{
      console.log('error mongoose connection');
    });
    mongoose.set("toJSON", {
      virtuals: true,
      transform: (_: any, converted: any) => {
        delete converted._id;
      },
    });
  }

  private setControllers() {
    // Creating a new instance of our Pokemon Controller
    const usersController = new UsersController(new UsersService());

    // Telling express to use our Controller's routes
    this.app.use('/users', usersController.router);
  }

  private setErrorHandlingMiddleware() {
    this.app.use(handleErrors);
  }
}

export default new App().app;
