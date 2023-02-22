import mongoose, { Schema } from 'mongoose'

const orderSchema = new Schema({
    shippingInfo: {
        address: {
            tyrpe: String,
            required: [true, 'Please enter address.'],
            trim: true
        },
        city: {
            tyrpe: String,
            required: [true, 'Please enter city.'],
            trim: true
        },
        country: {
            tyrpe: String,
            required: [true, 'Please enter country.'],
            trim: true
        },
        zipCode: {
            type: Number,
            quired: [true, 'Please enter zip code.']
        },
        phone: {
            type: String,
            required: [true, 'Please enter phone.'],
            trim: true
        },
    },
    orderItems: [
        {
            price: {
                type: Number,
                required: [true, 'Please enter price.'],
                trim: true
            },
            quantity: {
                type: Number,
                required: [true, 'Please enter quantity.'],
                trim: true
            },
            product: {
                type: Schema.Types.ObjectId,
                ref: 'Product',
                required: true
            }
        }
    ],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    paymentInfo: {
        id: {
            type: String,
            required: true
        },
        status: {
            type: String,
            required: true
        }
    },
    paidAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    itemsPrice: { // ???!!! [{}]
        type: Number,
        required: true,
        default: 0
    },
    taxPrice: {
        type: Number,
        required: true,
        default: 0
    },
    shippingPrice: {
        type: Number,
        required: true,
        default: 0
    },
    totalPrice: {
        type: Number,
        required: true,
        default: 0
    },
    orderStatus: {
        type: String,
        required: true,
        lowercase: true,
        default: 'processing',
        enum: {
            values: ['processing', 'shipped', 'delivered'],
            message: '{VALUE} is not supported'
        },
        trim: true,
    },
    deliveredAt: {
        type: Date
    }
}, { timestamps: true })

const Order = mongoose.model('Order', orderSchema)

export default Order