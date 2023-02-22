import mongoose, { Schema } from 'mongoose'

const userSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Please enter your name.'],
        lowercase: true,
        minLength: [3, 'Must be at least 3, got { VALUE }'],
        maxLength: [50, 'Must be at maximum 50, got { VALUE }'],
        trim: true,
        unique: true
    },
    email: {
        type: String,
        required: [true, 'Please enter email.'],
        lowercase: true,
        trim: true,
        unique: true,
        match: /.+\@.+\..+/,
    },
    password: {
        type: String,
        required: [true, 'Please enter password.'],
        trim: true,
        select: true, // false 
        minLength: [8, 'Must be at least 8, got { VALUE }'],
    },
    phone: {
        type: String,
        required: [true, 'Please enter phone.'],
        trim: true,
        unique: true,
    },
    avatar: {
        id: {
            type: String,
        },
        url: {
            type: String
        }
    },
    roles: {
        type: [String],
        default: 'user',
        required: true,
        enum: {
            values: ['user', 'seller', 'admin'],
            message: '{VALUE} is not supported'
        },
        trim: true,
    },
    store: {
        type: Schema.Types.ObjectId,
        ref: 'Store'
    },
    
    updatedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    refreshToken: [String],
    blocked: {
        type: Boolean,
        default: false
    }

}, { timestamps: true })

const User = mongoose.model('User', userSchema)

export default User