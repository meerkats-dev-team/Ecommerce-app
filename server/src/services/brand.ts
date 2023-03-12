import { isValidObjectId } from "mongoose";
import { boolean, object, string } from "zod";

export default class BrandDataSchema {

    private readonly data = {
        body: object({
            title: string({
                required_error: "Title is required",
                invalid_type_error: "Title must be a string"
            }).trim()
                .min(3, 'Title must contain at least 3 characters')
                .max(50, 'Title must contain at most 50 characters'),
            description: string({
                required_error: "Description is required",
                invalid_type_error: "Description must be a string"
            }).trim()
                .min(10, "Description must contain at least 10 characters")
                .max(1000, 'Title must contain at most 1000 characters'),
            // addedBy: string({
            //     required_error: "Added By is required",
            // }).trim().refine((value) => isValidObjectId(value), 'Invalid Id'),
            // updatedBy: string({
            //     required_error: "Updated By is required",
            // }).trim().refine((value) => isValidObjectId(value), 'Invalid Id'),
            discontinued: boolean().default(false)
        })
    }

    private readonly params = {
        params: object({
            id: string().trim().refine((value) => isValidObjectId(value), 'Invalid Id'),
        }),
    }

    public addBrandSchema = object({
        ...this.data
    })

    public getBrandSchema = object({
        ...this.params
    })

    public deleteBrandSchema = object({
        ...this.params
    })

    public updateBrandSchema = object({
        ...this.data,
        ...this.params
    })
}