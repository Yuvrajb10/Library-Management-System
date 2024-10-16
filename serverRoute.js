const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const adminRoute = require('./routes/adminRoute');
const userRoute = require('./routes/userRoute'); // Import user route
const transactionRoute = require('./routes/transactionRoute');
const bookRoutes = require('./routes/bookRoutes'); 


const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/admin', adminRoute);
app.use('/user', userRoute); // Use user route
app.use('/transactions', transactionRoute);
app.use('/books', bookRoutes);

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
