import express from "express";
import itemController from "../controllers/item.controller.js";

let itemRouter = express.Router();

// GET //
itemRouter.get('/', itemController.getAllItems);
itemRouter.get('/:id', itemController.getItem);

// POST //
itemRouter.post('/', itemController.addItem);

// DELETE //
itemRouter.delete('/:id', itemController.deleteItem);

// PUT //
itemRouter.put('/:id', itemController.updateItem);

export default itemRouter;