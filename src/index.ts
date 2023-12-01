import express from 'express'
import dummyRouter from './routes/dummy'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
app.use(express.json())

app.use('/api/v1/products', dummyRouter)

app.listen(process.env.PORT, () => {
  console.log(`Server running on port: ${process.env.PORT}`)
})
