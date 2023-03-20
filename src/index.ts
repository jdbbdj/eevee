import express, { Application } from "express";
import userRouter from "./routes/users/index";
const app: Application = express();
app.use(express.json());
app.use("/users", userRouter);

app.listen(5000, () => {
  console.log("Server Running");
});
