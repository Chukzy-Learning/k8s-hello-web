import { Express } from "express";
import os from 'os'

const app = express()
const PORT = 3000

app.get("/" , (reg, res) => {
  const HelloMessage = 'Hello from the ${os.hostname()}'
  console.log(HelloMesage)
  res.send(heloMessage)
})

app.listen(PORT, () => {
  Console.log('Web server is listening at port ${PORT}')
})