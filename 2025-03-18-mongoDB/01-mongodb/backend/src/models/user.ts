import mongoose from "../db/mongoose"

export interface User {
    id: string,
    name: string,
    username: string,
    password: string,
    createdAt: Date,
    following: string[]
}

const UserSchema = new mongoose.Schema<User>({
    name: String,
    username: String,
    password: String,
    createdAt: Date,
    following: [String]
},
    {
        versionKey: false,
        virtuals: {
            id: {
                get() {
                    return this._id
                }
            }
        },
        toObject: {
            virtuals: true
        }
    })

export const UserModel = mongoose.model<User>('User', UserSchema, 'users')