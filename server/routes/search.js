import express from 'express'
import { getAllProductBySearch } from '../controllers/search.js'

const router = express.Router()

//search product

router.get('/search', getAllProductBySearch)

export default router