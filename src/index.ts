import * as dotenv from "dotenv";
dotenv.config();
import app from "./server/index.js";
import chalk from "chalk";

const port = process.env.PORT ?? 4000;

app.listen(port, () => {
  console.log(chalk.blue.bold`Listening on http://localhost:${port}`);
});
