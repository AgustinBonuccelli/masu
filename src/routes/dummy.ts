import express from 'express'
import * as productServices from '../services/productServices'

const router = express.Router()

router.get('/:id', async (req, res) => {
  try {
    const response = await productServices.findById(+req.params.id)
    return response != null ? res.send(response) : res.sendStatus(404)
  } catch (e) {
    const err = e instanceof Error
    if (err) {
      res.sendStatus(400).send(e.message)
    }
  }
})

router.get('/', async (req, res) => {
  try {
    const limit: number = req.query.limit as unknown as number
    const skip: number = req.query.skip as unknown as number
    const select: string = req.query.select as unknown as string

    const response = await productServices.getEntries(limit, skip, select)
    return response != null ? res.send(response) : res.sendStatus(404)
  } catch (e) {
    const err = e instanceof Error
    if (err) {
      res.sendStatus(400).send(e.message)
    }
  }
})

export default router
