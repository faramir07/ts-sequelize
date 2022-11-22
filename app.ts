import express from "express";
import routes from './src/routes/index'
const morgan = require('morgan');
import bodyParser from 'body-parser';
// import cors from 'cors'

const app = express();
//cors:
// app.use(cors({ origin: '*' }))
//midlewares:

//----------

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({extended: true}));

app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));
// app.use(cookieParser());

app.use(morgan('dev'));
app.use((_req: any, res: any, next: any) => {
  res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

app.use('/', routes)

export default app;