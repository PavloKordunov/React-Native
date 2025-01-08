import express from "express"
import "dotenv/config"
import { connectDb } from "./db/connectDb.js"
import userRoutes from './routes/userRoutes.js'
import postRouter from "./routes/postRoutes.js"

const PORT = process.env.PORT || 5000

connectDb()

const app = express()

app.use(express.json({limit: "50mb"}))
app.use(express.urlencoded({extended: true}))

app.use("/api/users", userRoutes)
app.use("/api/posts", postRouter)

app.listen(PORT, () => console.log(`Server started at ${PORT} port`))