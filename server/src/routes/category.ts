import { Router } from "express"
import CategoryControllers from "../controllers/category"
import validate from "../middlewares/validate"
import CategoryDataSchema from "../services/category"

const categoryControllers = new CategoryControllers()
const categoryDataSchema = new CategoryDataSchema()

const { getAllCategories, getCategory, addCategory, deleteCategory, updateCategory } = categoryControllers
const { addCategorySchema, getCategorySchema, deleteCategorySchema, updateCategorySchema } = categoryDataSchema

const router  = Router()


router.route("/")
    .get(getAllCategories)
    .post(validate(addCategorySchema), addCategory)
router.route("/:id")
    .get(validate(getCategorySchema), getCategory)
    .patch(validate(updateCategorySchema), updateCategory)
    .delete(validate(deleteCategorySchema), deleteCategory)

export default router