const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoutes');

const app = express();

app.use(bodyParser.json());
app.use('/public', express.static('public'));

app.use('/api', productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    