import {Request, Response, Router} from 'express';
import {UsersService} from '../services/users.services';

export class UsersController {
  public router = Router();

  constructor(private usersService: UsersService) {
    this.setRoutes();
  }

  public setRoutes() {
    this.router.route("/").get(this.sayHello);

    this.router.route("/all").get(this.findAll);

    this.router.route("/").post(this.add);

    this.router.route("/:id").put(this.update);

    this.router.route("/:id").delete(this.delete).put(this.update);
  }

  private sayHello = (_: Request, res: Response) => {
    const welcomeMessage = this.usersService.welcomeMessage();
    res.send(welcomeMessage);
  };

  private findAll = async (_: Request, res: Response) => {
    try {
      const users = await this.usersService.findAll();
      res.send(users);
    } catch (e) {
      res.status(500).send(e.message);
    }
  }

  // Our new add method
  private add = async (req: Request, res: Response) => {
    try {
      const addUserResult = await this.usersService.add(req.body);
      res.send(addUserResult);
    } catch (e) {
      res.status(500).send(e.message);
    }
  };

  // Our new update method
  private update = async (req: Request, res: Response) => {
    try {
      const updateUserResult = await this.usersService.update(
        req.params.id,
        req.body
      );
      res.send(updateUserResult);
    } catch (e) {
      res.status(500).send(e.message);
    }
  };

  // Our new delete method
  private delete = async (req: Request, res: Response) => {
    try {
      const deleteUserResult = await this.usersService.delete(
        req.params.id
      );
      res.send(deleteUserResult);
    } catch (e) {
      res.status(500).send(e.message);
    }
  };

}
