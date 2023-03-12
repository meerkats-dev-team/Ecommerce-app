import { Router } from "express"
import categoryRoute from './category'
import brandRoute from './brand'

const router = Router()

router.use('/categories', categoryRoute)
router.use('/brands', brandRoute)


export default router