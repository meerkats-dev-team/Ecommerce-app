import { Request, Response } from "express"
import asyncHandler from "express-async-handler"
import Category from "../models/Category"
import CustomError from "../utils/customError"

export default class CategoryControllers {
    getAllCategories = asyncHandler(async (req: Request, res: Response): Promise<void> => {
        const categories = await Category.find({})?.exec()
        
        // if (!categories || categories === null || categories.length === 0) {
        //     throw new CustomError(404, 'Categories not found')
        // }
        
        res.json({ success: true, categories })
    })

    getCategory = asyncHandler(async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params
        
        const category = await Category.findById(id)
        
        if(!category || category === null) {
            throw new CustomError(404, 'Category not found')
        }
        
        res.json({ success: true, category })
    })

    addCategory = asyncHandler(async (req: Request, res: Response): Promise<void> => {
        const { title } = req.body

        const isTitleExist = await Category.findOne({ title })?.exec();
        
        if (isTitleExist ?? false) {
            throw new CustomError(409, 'Category title already exists.');
        }

        const category = await Category.create(req.body)

        res.status(201).json({ success: true, category })
    })

    deleteCategory = asyncHandler(async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params

        const category = await Category.findById(id)

        if (!category) {
            throw new CustomError(404, `Category with ID ${id} not found`);
        }

        await category.remove()

        res.json({ success: true, message: `The category has been deleted successfully.` })
    })

    updateCategory = asyncHandler(async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params
        const { title } = req.body

        const categoryId = await Category.findById(id)

        if (!categoryId) {
            throw new CustomError(404, `Category with ID ${id} not found`);
        }

        const isTitleExist = await Category.findOne({title}).exec()

        if (isTitleExist && (isTitleExist._id.toString() !== id)) {
            throw new CustomError(409, 'Category title already exists.');
        }

        const category = await Category.findByIdAndUpdate(id, req.body, {new: true, runValidators: true})

        if(!category) {
            throw new CustomError(404, `Category with ID ${id} not found`);
        }

        res.json({ success: true, category })
    })
}