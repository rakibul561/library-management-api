import express, { NextFunction, Request, Response } from "express";
import { Book } from "../models/book.models";

export const bookRouters = express.Router();

bookRouters.post(
  "/create-book",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const body = req.body;
      const book = await Book.create(body);

      res.status(201).json({
        success: true,
        message: "book created succefully ",
        book,
      });
    } catch (error) {
      next(error);
    }
  }
);
bookRouters.get(
  "/",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const book = await Book.find();
      res.status(201).json({
        success: true,
        message: "Book retrieved successfully",
        book,
      });
    } catch (error) {
      next(error);
    }
  }
);

bookRouters.get(
  "/:bookID",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const bookID = req.params.bookID;
      const book = await Book.findById(bookID);
      res.status(201).json({
        success: true,
        message: "Book retrieved successfully ",
        book,
      });
    } catch (error) {
      next(error);
    }
  }
);


bookRouters.put(
  "/:bookID",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const bookID = req.params.bookID;
      const updatedBody = req.body;
      const book = await Book.findByIdAndUpdate(bookID, updatedBody, {
        new: true,
      });
      res.status(201).json({
        success: true,
        message: "book updated  succefully ",
        book,
      });
    } catch (error) {
      next(error);
    }
  }
); 
// routes/book.route.ts

bookRouters.delete(
  "/:bookID",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const bookID = req.params.bookID;
      const deletedBook = await Book.findByIdAndDelete(bookID);

      if (!deletedBook) {
        return res.status(404).json({
          success: false,
          message: "Book not found",
          data: null,
        });
      }

      res.status(200).json({
        success: true,
        message: "Book deleted successfully",
        data: null,
      });
    } catch (error) {
      next(error);
    }
  }
);


