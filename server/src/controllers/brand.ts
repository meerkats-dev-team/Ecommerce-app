import { Request, Response } from "express"
import asyncHandler from "express-async-handler"
import Brand from "../models/Brand"
import CustomError from "../utils/customError"

export default class BrandControllers {
    getAllBrands = asyncHandler(async (req: Request, res: Response): Promise<void> => {
        const brands = await Brand.find({})?.exec()

        res.json({ success: true, brands })
    })

    getBrand = asyncHandler(async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params

        const brand = await Brand.findById(id)

        if (!brand || brand === null) {
            throw new CustomError(404, 'Brand not found')
        }

        res.json({ success: true, brand })
    })

    addBrand = asyncHandler(async (req: Request, res: Response): Promise<void> => {
        const { title } = req.body

        const isTitleExist = await Brand.findOne({ title })?.exec();

        if (isTitleExist ?? false) {
            throw new CustomError(409, 'Brand title already exists.');
        }

        const brand = await Brand.create(req.body)

        res.status(201).json({ success: true, brand })
    })

    deleteBrand = asyncHandler(async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params

        const brand = await Brand.findById(id)

        if (!brand) {
            throw new CustomError(404, `Brand with ID ${id} not found`);
        }

        await brand.remove()

        res.json({ success: true, message: `The brand has been deleted successfully.` })
    })

    updateBrand = asyncHandler(async (req: Request, res: Response): Promise<void> => {
        const { id } = req.params
        const { title } = req.body

        const brnadId = await Brand.findById(id)

        if (!brnadId) {
            throw new CustomError(404, `Brand with ID ${id} not found`);
        }

        const isTitleExist = await Brand.findOne({ title }).exec()

        if (isTitleExist && (isTitleExist._id.toString() !== id)) {
            throw new CustomError(409, 'Brand title already exists.');
        }

        const brnad = await Brand.findByIdAndUpdate(id, req.body, { new: true, runValidators: true })

        if (!brnad) {
            throw new CustomError(404, `Brand with ID ${id} not found`);
        }

        res.json({ success: true, brnad })
    })
}