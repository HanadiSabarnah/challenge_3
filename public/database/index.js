const mongoose = require('mongoose');
const dbURI = 'mongodb+srv://hanadi:123asd@cluster0.mupl0.mongodb.net/test?retryWrites=true&w=majority'
const connect = mongoose.connect(dbURI,
    {
      useNewUrlParser: true, useUnifiedTopology: true,
      useCreateIndex: true, useFindAndModify: false
    })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err));