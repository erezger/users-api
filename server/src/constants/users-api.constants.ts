// src/constants/users-api.constants.ts

export const PORT = 9001;
export const WELCOME_MESSAGE = 'Welcome to Users REST API';
export const MONGO_URL = 'mongodb://localhost:27017/Users';

export const MONGO = {
  url: 'mongodb://localhost:27017/Users',
  configuration: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }
}
