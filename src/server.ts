import express, { Request, Response } from "express";

class Server {
  private app: express.Application;

  constructor() {
    this.app = express();
    this.configuration();
    this.routes();
  }

  // Configuring the server
  /*
   * If we don't set PORT env variable,
   * the server port defaults to 3000
   */
  public configuration() {
    this.app.set("port", process.env.PORT || 3000);
  }

  // Configuring routes
  public routes() {
    this.app.get("/", (req: Request, res: Response) => {
      res.send("Hello world!");
    });
  }

  // Starts the server
  public start() {
    this.app.listen(this.app.get("port"), () => {
      console.log(`Server is listening ${this.app.get("port")} port`);
    });
  }
}

const server = new Server();
server.start();
