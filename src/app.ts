  
import express, { Application, NextFunction, Request, Response } from 'express';


 
  const app:Application = express(); 
  app.use(express.json())


  
   
app.get('/', (req:Request, res:Response) =>{
    res.send("Well Come mongoose  App")
})


  export default app;