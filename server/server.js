const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const xss = require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize');
const routes = require('./routes');
const passsport = require('passport');
const { jwtStrategy } = require('./middleware/passport');
const { handleError, convertToApiError } = require('./middleware/apiError');


const mongoUri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}?retryWrites=true&w=majority`;
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex:true,
  useFindAndModify: false
})

app.use(express.json())

/// sanitize
app.use(xss());
app.use(mongoSanitize());

/// passport
app.use(passsport.initialize());
passsport.use('jwt', jwtStrategy);

/// routes
app.use('/api', routes)

/// Handle Error
/// if coming from server or mongoose ...
app.use(convertToApiError);
app.use((err, req, res, next) => {
  handleError(err, res)
})





const port = process.env.PORT || 3001
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
});