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

ShowSchema.virtual('animal', {
  localField: 'animalId',
  ref: 'Animal',
  foreignField: '_id',
  justOne: true
})

ShowSchema.virtual('handler', {
  localField: 'handlerId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})