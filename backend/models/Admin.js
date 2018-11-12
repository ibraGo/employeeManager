import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Admin = new Schema({
    name: String,
    password: String,
    email: String,
});

export default mongoose.model('Admin', Admin);