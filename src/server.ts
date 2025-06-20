
import { Server } from 'http';
import app from './app';
import mongoose from 'mongoose';

 const PORT = 3000 ;

 let server: Server;
  async function main (){
    try {
         await mongoose.connect('mongodb+srv://bookApp:bookApp@cluster0.fmdvppd.mongodb.net/library?retryWrites=true&w=majority&appName=Cluster0');
         console.log('Connect to MongoDb');
         
        server = app.listen(PORT, () =>{
            
            console.log(`App listening in port ${PORT}`);
            
        })
        
    } catch (error) {
        console.log(error);
        
    }
  }


  main();