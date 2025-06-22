  
import express, { Application, NextFunction, Request, Response } from 'express';
import { globalErrorHandler } from './app/middleware/handleErrors';
import { bookRouters } from './app/controller/book.controller';
import { borrowRoutes } from './app/controller/borrow.controller';




 
  const app:Application = express(); 
  app.use(express.json())

 app.use('/api/books', bookRouters)
 app.use('/api/borrow', borrowRoutes)
  
   
app.get('/', (req:Request, res:Response) =>{
    res.send("Well Come mongoose  App")
})
 

app.use(globalErrorHandler)

  export default app;