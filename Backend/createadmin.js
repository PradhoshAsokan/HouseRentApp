const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');
const User = require('./models/User');

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/houseRentApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log('MongoDB connection error:', err));

const createAdmin = async () => {
  const hashedPassword = await bcrypt.hash('admin', 10); // hash the password

  const admin = new User({
    name: 'Admin',
    email: 'admin@mail.com',
    password: hashedPassword,
    type: 'Admin',
  });

  try {
    const savedAdmin = await admin.save();
    console.log('Admin created successfully:', savedAdmin);
  } catch (error) {
    console.error('Error creating admin:', error);
  }
};

createAdmin();