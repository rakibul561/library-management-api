  
import express, { Application, NextFunction, Request, Response } from 'express';
import { globalErrorHandler } from './app/middleware/handleErrors';
import { bookRouters } from './app/controller/book.controller';
import { borrowRoutes } from './app/controller/borrow.controller';
import path from 'path';





 
  const app:Application = express(); 
  app.use(express.json())

 app.use('/api/books', bookRouters)
 app.use('/api/borrow', borrowRoutes)
  
 // Static Files Middleware
app.use(express.static(path.join(__dirname, '../public')));

// Root Route (serve index.html)
app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});
   
// app.get('/', (req:Request, res:Response) =>{
//     res.send("Well Come mongoose  App")
// })
 

app.use(globalErrorHandler)

  export default app;