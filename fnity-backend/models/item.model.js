import mongoose from "mongoose";

const ItemSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required']
    },

    price: {
        type: Number,
        required: [true, 'Price is required'],
    },

    amount: {
        type: Number,
        required: [true, 'Amount is required'],
    },

    rarity: {
        type: String,
        required: [true, 'Rarity is required'],
    },

    img: {
        type: String,
        required: [true, 'Image is required'],
    }
});

const Item = mongoose.model('Item', ItemSchema);
export default Item;