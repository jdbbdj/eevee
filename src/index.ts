import express, { Application } from "express";
import userRouter from "./routes/users/index";
import pointerRouter from "./routes/pointers/index";
const app: Application = express();
app.use(express.json());
app.use("/users", userRouter);
app.use("/pointers", pointerRouter);

app.listen(5000, () => {
  console.log("Server Running");
});
