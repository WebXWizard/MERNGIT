const mongoose = require('mongoose');
const url="mongodb+srv://shahealam:shahealam123@cluster0.doljwdv.mongodb.net/MERNGIT?retryWrites=true&w=majority"
mongoose.connect(url)


//   Asynchronoues function-(promise return success or error not in pending state)

.then((result) => {
    console.log('Connected to the database') 

}).catch((err) => {
    console.log(err) 
});
module.exports =mongoose;