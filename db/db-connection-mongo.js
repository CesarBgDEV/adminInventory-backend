const mongoose = require('mongoose');

 const getConnection = async ()=>{
    try{
        const url = 'mongodb://user_bd:j09ZcIPzS7Kk2uOS@ac-4d9wfui-shard-00-00.yy0cop7.mongodb.net:27017,ac-4d9wfui-shard-00-01.yy0cop7.mongodb.net:27017,ac-4d9wfui-shard-00-02.yy0cop7.mongodb.net:27017/inventarios?ssl=true&replicaSet=atlas-srii52-shard-0&authSource=admin&retryWrites=true&w=majority';

        await mongoose.connect(url);
    
        console.log('Conexión exitosa...');

    }catch(error){
        console.log(error);
    }

   
 }

 module.exports ={
    getConnection,
 }