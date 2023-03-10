const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection')
require ('dotenv')

const app = express();
const PORT = process.env.PORT || 3006;

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening port 3006'));
  });
  