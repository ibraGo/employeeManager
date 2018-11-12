import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Employee = new Schema({
    name: String,
    last_name: String,
    job: String,
    salary: Number,
    phone: String
});

export default mongoose.model('Employee', Employee);