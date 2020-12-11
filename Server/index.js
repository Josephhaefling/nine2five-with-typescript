import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

import favoritesRoutes from "./routes/favorites.js"

const app = express()

app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}))
app.use(cors())

app.use("/favorites", favoritesRoutes)

const CONNECTION_URL = "mongodb+srv://meanjoebean:meanjoebean123@cluster0.sntkh.mongodb.net/nine2Five?retryWrites=true&w=majority"
const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server is running on ${PORT}`)))
    .catch((error) => console.log(error.message))

mongoose.set("useFindAndModify", false)
