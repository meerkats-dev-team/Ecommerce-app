import mongoose, { Schema } from 'mongoose'

const productSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Please enter product name.'],
        lowercase: true,
        minLength: [3, 'Must be at least 3, got { VALUE }'],
        maxLength: [50, 'Must be at maximum 50, got { VALUE }'],
        trim: true,
    },
    description: {
        type: String,
        required: [true, 'Please enter category description.'],
        lowercase: true,
        minLength: [10, 'Must be at least 10, got { VALUE }'],
        maxLength: [1000, 'Must be at maximum 1000, got { VALUE }'],
        trim: true,
    },
    price: {
        type: Number,
        required: [true, 'Please enter product price.'],
        // typeCurrency: {
        //     enum: ["$", ""]
        // }
        trim: true
    },
    discount: {
        type: Number,
        default: 0
    },
    stock: {
        type: Number,
        required: [true, 'Please enter product stock.'],
        default: 1
    },
    images: [
        {
            id: String,
            url: String
        }
    ],
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: [true, 'Please select product category.']
    },
    brand: {
        type: Schema.Types.ObjectId,
        ref: 'Brand',
        required: [true, 'Please select product brand.']
    },
    store: {
        type: Schema.Types.ObjectId,
        ref: 'Store',
        required: [true, 'Please select product store.']
    },
    localShipmentPolicy: {
        type: String,
        required: [true, 'Please select a local shipment policy.'],
        default: 'standard',
        enum: {
            values: ['standard', 'free', 'custom'],
            message: '{VALUE} is not supported'
        },
        trim: true,
    },
    customLocalShipmentPolicy: {
        type: Number
    },
    internationalShipmentPolicy: {
        type: String,
        required: [true, 'Please select an international shipment policy.'],
        default: 'standard',
        enum: {
            values: ['standard', 'free', 'custom'],
            message: '{VALUE} is not supported'
        },
        trim: true,
    },
    customInternationalShipmentPolicy: {
        type: Number
    },
    weight: {
        type: Number,
        default: 1
    },
    ratings: {
        type: Number,
        default: 0
    },
    numberOfReviews: {
        type: Number,
        default: 0
    },
    reviews: [
        {
            user: {
                type: Schema.Types.ObjectId,
                ref: 'User',
                required: true
            },
            rating: {
                type: Number,
                required: true,
                // Rating from 1 to 5 ? enum || min/max
            },
            comment: {
                type: String,
                rquired: [true, 'Please enter your comment.'],
                lowercase: true,
                trim: true
            }

        },

    ],
    addedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    updatedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, { timestamps: true })

const Product = mongoose.model('Product', productSchema)

export default Product