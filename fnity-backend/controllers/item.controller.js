import Item from "../models/item.model.js";

const getAllItems = async (req, res) => {
    try {
        const items = await Item.find();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

const getItem = async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        res.status(200).json(item);
    } catch (error) {
        res.status(500).json({ message: error });
    }
} 

const addItem = async (req, res) => {
    try {
        const item = await Item.create(req.body);
        res.status(200).json(item);
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

const deleteItem = async (req, res) => {
    try {
        await Item.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Item deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

const updateItem = async (req, res) => {
    try {
        await Item.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({ message: "Item updated successfully" });
    } catch (error) {
        res.status(500).json({ message: error });
    }
}

export default { getAllItems, getItem, addItem, deleteItem, updateItem };