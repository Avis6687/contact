import express from "express";
import { contact } from "./API/contact.js";
import cors from "cors";

const main = async () => {
  const app = express();
  app.use((req, res, next) => {
    console.log(req.url);
    next();
  });
  const port = 8080;
  console.log("hi world");

  app.use(cors());
  app.use(
    cors({
      origin: "* ",
    })
  );

  app.use(express.json());

  app.use(contact);

  app.listen(port, () => {
    console.log(`listening at port ${port}`);
  });
};
main();
