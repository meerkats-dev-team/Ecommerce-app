import mongoose, { Schema } from 'mongoose'

const categorySchema = new Schema({
    title: {
        type: String,
        required: [true, 'Please enter category name.'],
        lowercase: true,
        minLength: [3, 'Must be at least 3, got { VALUE }'],
        maxLength: [50, 'Must be at maximum 50, got { VALUE }'],
        trim: true,
        unique: true
    },
    description: {
        type: String,
        required: [true, 'Please enter category description.'],
        lowercase: true,
        minLength: [10, 'Must be at least 10, got { VALUE }'],
        maxLength: [1000, 'Must be at maximum 1000, got { VALUE }'],
        trim: true,
    },
    addedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    updatedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    discontinued: {
        type: Boolean,
        default: false
    }
}, {timestamps: true})

const Category = mongoose.model('Category', categorySchema)

export default Category