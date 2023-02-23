import express, { Application } from "express";
import commentRouter from "./routes/sample";
const app: Application = express();
app.use(express.json());
app.use("/comments", commentRouter);

app.listen(5000, () => {
  console.log("Server Running");
});
