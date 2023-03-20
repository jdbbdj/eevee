import express, { Application } from "express";
import userRouter from "./routes/users/";
import pointerRouter from "./routes/pointers/";
import linkedListRouter from "./routes/LinkedList/";
const app: Application = express();
app.use(express.json());
app.use("/users", userRouter);
app.use("/pointers", pointerRouter);
app.use("/linked", linkedListRouter);

app.listen(5000, () => {
  console.log("Server Running");
});
