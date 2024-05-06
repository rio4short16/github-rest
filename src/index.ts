
import express from 'express'
import { PORT } from "./common/environment";
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get("/", (_, res) => {
    res.json({ message: "Hello World" })
})

app.listen(PORT, () => {
    console.info(`
        Server listening at: http://localhost:${PORT}
    `)
})