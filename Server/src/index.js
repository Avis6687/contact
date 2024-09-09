import express from "express";
import { contact } from "./API/contact.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const main = async () => {
  const app = express();
  app.use((req, res, next) => {
    console.log(req.url);
    next();
  });

  app.use(cors());
  app.use(
    cors({
      origin: "* ",
    })
  );

  app.use(express.json());

  app.use(contact);

  app.listen(process.env.DB_PORT, () => {
    console.log(`listening at port ${process.env.DB_PORT}`);
  });
};
main();
