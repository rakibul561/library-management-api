import express, { NextFunction, Request, Response } from "express";
import { Book } from "../models/book.models";

export const bookRouters = express.Router();

bookRouters.post(
  "/create-book",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const body = req.body;
      const data = await Book.create(body);

      res.status(201).json({
        success: true,
        message: "book created succefully ",
        data,
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
      const bookAuthor = req.query.author;
      const sortBy = req.query.sortBy as string || "createdAt"; 
      const sortOrder = req.query.order === "asc" ? 1 : -1;    
      const limit = parseInt(req.query.limit as string) || 10; 

      const query: any = {};
      if (bookAuthor) {
        query.author = bookAuthor;
      }

      const data = await Book.find(query)
        .sort({ [sortBy]: sortOrder }) 
        .limit(limit);                

      res.status(200).json({
        success: true,
        message: "Books retrieved successfully",
        data,
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
      const data = await Book.findById(bookID);
      res.status(201).json({
        success: true,
        message: "Book retrieved successfully ",
        data,
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
      const data = await Book.findByIdAndUpdate(bookID, updatedBody, {
        new: true,
      });
      res.status(201).json({
        success: true,
        message: "book updated  succefully ",
        data,
      });
    } catch (error) {
      next(error);
    }
  }
); 


bookRouters.delete(
  "/:bookID",
  async (req, res, next) => {
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


