const express = require('express');
const app = express();
const mongoose = require('./database/db')
const cors = require('cors');

app.use(express.json());

app.use(cors());

const user = require('./routes/user_route');
//Routes
app.use('/user', user );
app.use('/userskill', require('./routes/user_skills_route'));
app.use('/location', require('./routes/location_route'));
app.use('/feedback', require('./routes/feedback_route'));
app.use('/skill', require('./routes/skill_route'));
app.use('/cities', require('./routes/cities_route'));
app.use('/contact', require('./routes/contact_route'));

app.listen(3000, ()=>console.log('Server connected to port 3000'));


