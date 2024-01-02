import config from "../config";
import app from "./app";

const server = app.listen(config.SERVER_PORT);

server.on("listening", () =>
  console.log(`Server running on *:${config.SERVER_PORT}`)
);
