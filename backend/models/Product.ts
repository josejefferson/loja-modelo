import mongoose from 'mongoose'

const options = { timestamps: true }

const schema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: String,
    price: { type: Number, required: true },
    oldprice: { type: Number },
    badge: { type: String },
    ratings: {
      type: [
        {
          client: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Clients',
            required: true
          },
          rating: {
            type: Number,
            required: true
          }
        }
      ],
      select: false,
      required: true,
      default: []
    },
    rating: {
      type: Object,
      1: Number,
      2: Number,
      3: Number,
      4: Number,
      5: Number,
      average: Number,
      totalUsers: Number,
      default: { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, average: 0, totalUsers: 0 },
      required: true
    },
    image: {
      type: { type: String, enum: ['image:url', 'image:id'] },
      value: String
    },
    media: [
      {
        type: { type: String, enum: ['image:url', 'image:id', 'video:youtube'] },
        value: String
      }
    ],
    stock: { type: Number, required: true },
    hidden: { type: Boolean, default: false },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
  },
  options
)

const Product = mongoose.model('Products', schema)
export default Product
