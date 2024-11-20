import { Schema } from "mongoose";

export const ShowSchema = new Schema(
  {
    title: { type: String, minLength: 3, maxLength: 50, required: true },
    handlerId: { type: Schema.ObjectId, required: true, ref: 'Account' },
    animalId: { type: Schema.ObjectId, required: true, ref: 'Animal' }
  },
  {
    timestamps: true,
    toJSON: { virtuals: true }
  }
)