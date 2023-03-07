import { isValidObjectId } from "mongoose";
import { boolean, object, string } from "zod";

export default class CategoryDataSchema {
    
    private readonly data = {
        body: object({
            title: string({
                required_error: "Title is required",
                invalid_type_error: "Title must be a string"
            }).trim()
                .min(3, 'Title must contain at least 3 character(s)')
                .max(50, 'Title must contain at most 50 character(s)'),
            description: string({
                required_error: "Description is required",
                invalid_type_error: "Description must be a string"
            }).trim()
                .min(10, "Description must contain at least 10 character(s)")
                .max(1000, 'Title must contain at most 1000 character(s)'),
            addedBy: string({
                required_error: "Added By is required",
            }).trim().refine((value) => isValidObjectId(value), 'Invalid Id'),
            updatedBy: string({
                required_error: "Updated By is required",
            }).trim().refine((value) => isValidObjectId(value), 'Invalid Id'),
            discontinued: boolean().default(false)
        })
    }

    private readonly params = {
        params: object({
            id: string({
                required_error: "Category id is required",
            }).trim().refine((value) => isValidObjectId(value), 'Invalid Id'),
        }),
    }

    public addCategorySchema = object({
        ...this.data
    })

    public getCategorySchema = object({
        ...this.params
    })

    public deleteCategorySchema = object({
        ...this.params
    })

    public updateCategorySchema = object({
        ...this.data,
        ...this.params
    })
}