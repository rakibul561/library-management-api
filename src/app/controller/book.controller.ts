import express, { NextFunction, Request, Response } from "express";
import { Book } from "../models/book.models";

  export  const bookRouters = express.Router() ;




 bookRouters.post('/create-book', async (req:Request, res:Response, next: NextFunction) =>{
    try { 

        const body = req.body ;
        const book = await Book.create(body) 
        


        res.status(201).json({
            success: true,
            message: "book created succefully ",
            book
        })
        
    } catch (error) { 
      next(error);
         
    }
 })
 bookRouters.get('/', async (req:Request, res:Response, next: NextFunction) =>{
    try { 
        const book = await Book.find();
        res.status(201).json({
            success: true,
            message: "book created succefully ",
            book
        })
        
    } catch (error) { 
      next(error);
         
    }
 })