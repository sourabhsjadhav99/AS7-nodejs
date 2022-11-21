const mongoose = require('mongoose');
// mongoose.connect("mongodb://localhost:27017/studentsRecord");
mongoose.connect(process.env.MONGODB_URI);