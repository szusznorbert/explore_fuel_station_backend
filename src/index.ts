import dotenv from "dotenv"
dotenv.config();
import 'module-alias/register';
import  express from "express"
import router from "@routes/index"
import {PORT} from "@configs/environment"

const app = express()
const port = PORT;

app.use(express.json());

router(app)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})