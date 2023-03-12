import { Router } from "express"
import BrandControllers from "../controllers/brand"
import validate from "../middlewares/validate"
import BrandDataSchema from "../services/brand"

const brandControllers = new BrandControllers()
const brandDataSchema = new BrandDataSchema()

const { getAllBrands, addBrand, getBrand, deleteBrand, updateBrand } = brandControllers
const { addBrandSchema, getBrandSchema, updateBrandSchema, deleteBrandSchema } = brandDataSchema

const router = Router()


router.route("/")
    .get(getAllBrands)
    .post(validate(addBrandSchema), addBrand)
router.route("/:id")
    .get(validate(getBrandSchema), getBrand)
    .patch(validate(updateBrandSchema), updateBrand)
    .delete(validate(deleteBrandSchema), deleteBrand)

export default router