import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import logger from 'morgan';
import mongoose from 'mongoose';

import personRoutes from './routes/person.server.routes';
import SourceMapSupport from 'source-map-support';

const app=express();


app.use(function(req,res,next){
  res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
})


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use(express.static(path.join(__dirname, 'public')));

const port = process.env.PORT || 3001;


mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost/person-crud',{
	useMongoClient: true,
});

SourceMapSupport.install();

app.use('/api',personRoutes)

app.get('/',(req,res)=>{
	return res.end('Api work');
});
app.use((req,res,next)=>{
	res.status(404).send('<p>Page not Found!</p>');
});


app.listen(port,() => {
  console.log(`App Server Listening at ${port}`);
});