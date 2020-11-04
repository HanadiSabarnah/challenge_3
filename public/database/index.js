const mongoose = require('mongoose');
const dbURI = 'mongodb+srv://hanadi:123asd@cluster0.mupl0.mongodb.net/test?retryWrites=true&w=majority'
const connect = mongoose.connect(dbURI,
  {
    useNewUrlParser: true, useUnifiedTopology: true,
    useCreateIndex: true, useFindAndModify: false
  })
  .then(() => console.log('Please mongodb Connected :('))
  .catch(err => console.log(err));

var infoSchema = mongoose.Schema({
  name: { type: String, unique: true },
  email: { type: String, unique: true },
  password: { type: String, unique: true },
  line1: { type: String },
  line2: { type: String },
  city: { type: String },
  state: { type: String },
  zipCode: { type: Number, unique: true },
  creditCard: { type: Number, unique: true },
  expiryDate: { type: Date },
  cvv: { type: Number, unique: true },
  billingZipCode: { type: Number, unique: true }
});

let User = mongoose.model('User', infoSchema);

let save = (obj) => {
  let user = new User(obj)
  user.save()

}

module.exports.save = save;
module.exports.User = User;
