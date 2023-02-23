import express, { Application } from "express";
import commentRouter from "./routes/comments/index";
const app: Application = express();
app.use(express.json());
app.use("/comments", commentRouter);

app.listen(5000, () => {
  console.log("Server Running");
});
