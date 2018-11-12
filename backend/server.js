import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import Employee from './models/Employee'

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost/employee', { useNewUrlParser: true });

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully!');
});

router.param('employee_id', function(req, res, next, id){
    Employee.findById(id, (err, employee) => {
        if(employee){
            req.employee = employee;
        }
        next();
    });
});

router.get('/', function(req, res){
    res.send('Hello World !!!');
});

router.get('/list', function(req, res){
    Employee.find((err, employees) => {
        if(employees){
            res.json(employees);
        }else if(err)
            console.log(err);
    });
});

router.get('/show/:employee_id', function(req, res){
    if(req.employee)
        res.status(202).json(req.employee);
    else
        res.status(404).send('employee not found');
});

router.post('/create', function(req, res){
    let employee = new Employee(req.body);
    employee.save().then(function (emp) {
        res.status(200).json({error: false, message: 'Added successfully'});
    }).catch(function (err) {
        res.status(400).json({error: true, message: 'Failed to create new record'});
    });
});

router.put('/edit',function(req, res){

    Employee.findByIdAndUpdate(req.body.employee_id,{$set:req.body}, function(err, result){
        if(err){
            console.log(err);
            res.json({error: true, message: 'Failed To Update'});
        }
        console.log("RESULT: " + result);
        res.json({error: false, message: 'Employee Updated'});
    });
});

router.delete('/delete',function(req, res){
    Employee.findByIdAndDelete(req.body.employee_id, (err, result) => {
        if(err)
            res.json({error: true, message: 'Failed To Delete'});
        else
            res.json({error: false, message: 'Employee Deleted'});
    });
});

app.use('/', router);

app.listen(4000, () => console.log(`Express server running on port 4000`));