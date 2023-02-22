import mongoose, { Schema } from 'mongoose'

const storeSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Please enter store name.'],
        lowercase: true,
        minLength: [3, 'Must be at least 3, got { VALUE }'],
        maxLength: [50, 'Must be at maximum 50, got { VALUE }'],
        trim: true,
        unique: true
    },
    description: {
        type: String,
        required: [true, 'Please enter store description.'],
        lowercase: true,
        minLength: [10, 'Must be at least 10, got { VALUE }'],
        maxLength: [1000, 'Must be at maximum 1000, got { VALUE }'],
        trim: true,
    },
    location: {
        address: {
            tyrpe: String,
            required: [true, 'Please enter store address.'],
            trim: true
        },
        city: {
            tyrpe: String,
            required: [true, 'Please enter store city.'],
            trim: true
        },
        country: {
            tyrpe: String,
            required: [true, 'Please enter store country.'],
            trim: true
        },
        zipCode: {
            type: Number
        },
        state: {
            tyrpe: String,
            required: [true, 'Please enter store state.'],
            trim: true
        }
    },
    email: {
        type: String,
        required: [true, 'Please enter store email.'],
        lowercase: true,
        trim: true,
        unique: true,
        match: /.+\@.+\..+/,
    },
    phone: {
        type: String,
        required: [true, 'Please enter store phone.'],
        trim: true,
        unique: true,
    },
    logo: {
        url: {
            type: String
        }
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
    }
}, { timestamps: true })

const Store = mongoose.model('Store', storeSchema)

export default Store