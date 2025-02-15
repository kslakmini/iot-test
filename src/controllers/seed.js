const express = require('express');

const router = express.Router();
const User = require('../models/User'); // import relevant model from models
// const JobRole = require('../models/JobRole'); // import relevant model from models
const { SysVar } = require('../models/index');
const jobRolesList = require('../assets/jobroles.json');
const list = require('../utils/systemVariables');
const universities = require('../utils/universityList');

const mongoose = require('mongoose');
// const Job = require('../models/Job');

router.get('/admin', async (req, res) => {
  try {
    const NewUser = new User({
      title: "Ms",
      userName: "Coool",
      email: "manager@gmail.com",
      password: "$2a$10$l0rofJeJ93lEWVDFGijnVOyndYrFP9N/6wSg/TgW1krxiAQtLqD2e",
      role: "company-manager",
    });

    await NewUser.save();

    res.sendStatus(200);
    
  } catch (error) {
    res.sendStatus(500);
  }
});

router.post('/job-roles', async (req, res) => {
  try {
    const dataArray = jobRolesList.map((ele) => {
      const obj = {
        name: ele,
        createdBy: null,
        status: 'active',
      };
      return obj;
    });
    await JobRole.insertMany(dataArray);

    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
});

router.post('/system-variables', async (req, res) => {
  try {
    await SysVar.insertMany(list);

    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(500);
  }
});


module.exports = router;
