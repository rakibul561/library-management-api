  
import express, { Application, NextFunction, Request, Response } from 'express';
import { bookRouters } from './app/controller/book.controller';
import { globalErrorHandler } from './app/middleware/handleErrors';


 
  const app:Application = express(); 
  app.use(express.json())

 app.use('/books', bookRouters)
  
   
app.get('/', (req:Request, res:Response) =>{
    res.send("Well Come mongoose  App")
})
 

app.use(globalErrorHandler)

  export default app;