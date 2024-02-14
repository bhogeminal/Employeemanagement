const express=require('express');
const bodyparser=require('body-parser');
const mongoose=require('mongoose');

const app=express();
const port =8000;
const cors = require('cors');
app.use(cors());

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());
mongoose.connect("mongodb+srv://minal:minal@cluster0.dvf1r85.mongodb.net/",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("connect")
}).catch((e)=>{
    console.log("error connect to mondgodb",e)
})
app.listen(port,()=>{
    console.log("serverrrrr is run on port 8000")
})
app.post("/addEmployee", async (req, res) => {
    try {
      const {
        employeeName,
        employeeId,
        designation,
        phoneNumber,
        dateOfBirth,
        joiningDate,
        activeEmployee,
        salary,
        address,
      } = req.body;
  
      //create a new Employee
      const newEmployee = new Employee({
        employeeName,
        employeeId,
        designation,
        phoneNumber,
        dateOfBirth,
        joiningDate,
        activeEmployee,
        salary,
        address,
      });
  
      await newEmployee.save();
  
      res
        .status(201)
        .json({ message: "Employee saved successfully", employee: newEmployee });
    } catch (error) {
      console.log("Error creating employee", error);
      res.status(500).json({ message: "Failed to add an employee" });
    }
  });
  
  //endpoint to fetch all the employees
  app.get("/employees", async (req, res) => {
    try {
      const employees = await Employee.find();
      res.status(200).json(employees);
    } catch (error) {
      res.status(500).json({ message: "Failed to retrieve the employees" });
    }
  });
  