const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);
const moment = require("moment");

const userRegSchema = (data) => {
  const enumTitle = ["Ms", "Mrs", "Mr"];
  const enumRole = [
    "company-manager",
    "employee",
  ];
  const Schema = Joi.object({
    title: Joi.string()
      .trim()
      .valid(...Object.values(enumTitle))
      .required(),
    firstName: Joi.string().trim().min(3).max(15).required(),
    lastName: Joi.string().trim().min(3).max(15).required(),
    email: Joi.string().trim().lowercase().email(),
    phoneNumber: Joi.string().trim(),
    address: Joi.string().required().min(1),
    role: Joi.string()
    .trim()
    .valid(...Object.values(enumRole))
    .required(),
  }).unknown();

  return Schema.validate(data);
};

const EmployeeInitialSchema=(data) =>{
  const enumRole = [
    "company-manager",
    "employee",
  ];
  const enumTitle = [
    "Ms",
    "Mr",
    "Mrs"
  ];
  const Schema = Joi.object({
    title:Joi.string()
    .trim()
    .valid(...Object.values(enumTitle))
    .required(),
    firstName: Joi.string().trim().min(3).max(15).required(),
    lastName: Joi.string().trim().min(3).max(15).required(),
    email: Joi.string().trim().lowercase().email(),
    phoneNumber: Joi.string().trim(),
    regNo: Joi.string().required(),
    role: Joi.string()
    .trim()
    .valid(...Object.values(enumRole))
    .required(),
    nic:Joi.string(),
    gender:Joi.string(),
    // dateOfBirth:Joi.string(),
    // joinedDate:Joi.string(),
    industry:Joi.string(),
  }).unknown();

  return Schema.validate(data);
};

const UpdateEmployeeInitialSchema=(data) =>{
  const enumRole = [
    "company-manager",
    "employee",
  ];
  const enumTitle = [
    "Ms",
    "Mr",
    "Mrs"
  ];
  const Schema = Joi.object({
    title:Joi.string()
    .trim()
    .valid(...Object.values(enumTitle))
    .required(),
    firstName: Joi.string().trim().min(3).max(15).required(),
    lastName: Joi.string().trim().min(3).max(15).required(),
    email: Joi.string().trim().lowercase().email(),
    phoneNumber: Joi.string().trim(),
    regNo: Joi.string().required(),
    companyName:Joi.string().required(),
    role: Joi.string()
    .trim()
    .valid(...Object.values(enumRole))
    .required(),
    nic: Joi.string().required(),
    industry:Joi.string(),
  }).unknown();

  return Schema.validate(data);
};
const EmployeeSignupSchema=(data) =>{
  const enumRole = [
    "company-manager",
    "employee",
  ];
  const enumStatus = [
    "active",
    "inactive",
  ];

  const Schema = Joi.object({
    firstName: Joi.string().trim().min(3).max(15).required(),
    lastName: Joi.string().trim().min(3).max(15).required(),
    email: Joi.string().trim().lowercase().email(),
    phoneNumber: Joi.string().trim(),
    regNo: Joi.string().required(),
    companyName: Joi.string().required(),
    industry: Joi.string().required(),
    role: Joi.string()
    .trim()
    .valid(...Object.values(enumRole))
    .required(),
    status:Joi.string()
    .trim()
    .valid(...Object.values(enumStatus))
    .required(),
  }).unknown();

  return Schema.validate(data);
}; 
const AttendanceInitialSchema = (data) => {
  const Schema = Joi.object({
    userId:Joi.string().required(),
    startAttendance: Joi.string().required(),
    date: Joi.date().iso().required()


  }).unknown();

  return Schema.validate(data);
};
const StatusInitialSchema = (data) => {
  const enumStatus = [
    "active",
    "inactive",
  ];
  const Schema = Joi.object({
    status:Joi.string()
    .trim()
    .valid(...Object.values(enumStatus))
    .required(),
  }).unknown();

  return Schema.validate(data);
};
const AddAttendanceInitialSchema = (data) => {

  const Schema = Joi.object({
    otHours: Joi.string().required(),
  }).unknown();

  return Schema.validate(data);
};
const UpdateAttendanceInitialSchema = (data) => {

  const Schema = Joi.object({
    userId: Joi.string().required(),
    endAttendance: Joi.string().required(),
    endTime : Joi.boolean().required(),
    date:Joi.string().required(),
    totalHours :Joi.number(),
  }).unknown();

  return Schema.validate(data);
};

const UpdateSchema = (data) => {

  const Schema = Joi.object({
    hours: Joi.string().allow(null, '').optional(),
    leaveType: Joi.string().allow(null, ''),
    
  }).unknown();

  return Schema.validate(data);
};
const SalaryInitialSchema = (data) => {

  const Schema = Joi.object({
    basicSalary: Joi.string().required(),
    allowedleavedays: Joi.string().required(),
    designation:Joi.string().required(),
    allowance: Joi.object({
      totalAllowance: Joi.string().required(),
    }).required(),
    deduction: Joi.object({
      totalDeduction: Joi.string().required(),
    }).required(),
    isEpfEtfEligible: Joi.boolean().required(),
    isApitTaxEligible: Joi.boolean().required(),
    epf8: Joi.string().required(),
    epf12: Joi.string().required(),
    totalEpf: Joi.string().required(),
    etf:Joi.string().required(),
    apitTax:Joi.string(),
    finalSalary:Joi.string().required(),
  
  }).unknown();

  return Schema.validate(data);
};

const SalaryMetaInitialSchema = (data) => {

  const Schema = Joi.object({
    companyID: Joi.string().required(),
    basicSalary: Joi.string().required(),
    epf8: Joi.string().required(),
    epf12: Joi.string().required(),
    totalEpf: Joi.string().required(),
    apitTax:Joi.string(),
    etf:Joi.string().required(),
   finalSalary:Joi.string().required(),
    allowance: Joi.object({
      totalAllowance: Joi.string().required(),
    }).required(),
    deduction: Joi.object({
      totalDeduction: Joi.string().required(),
    }).required(),
  }).unknown();

  return Schema.validate(data);
};

const UserInitialSchema = (data) => {

  const Schema = Joi.object({
    userId: Joi.string().required(),
    designation: Joi.string().required(),
    basicSalary: Joi.string().required(),
    allowance: Joi.object({
      totalAllowance: Joi.string().required(),
    }).required(),
    deduction: Joi.object({
      totalDeduction: Joi.string().required(),
    }).required(),
  }).unknown();

  return Schema.validate(data);
};
const hotelUserRegSchema = (data) => {
 
  const Schema = Joi.object({
    userName: Joi.string().trim().min(3).max(30).required(),

    itemSelect: Joi.required(),

    phoneNumber: Joi.string().trim(),

    email: Joi.string().trim().lowercase().email(),
    district: Joi.string().required(),
    password: Joi.string().pattern(
      new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
    ),
    confirmPassword: Joi.string().pattern(
      new RegExp(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
    ),
  }).unknown();

  return Schema.validate(data);
};

const selectHotelRegSchema = (data) => {
  const Schema = Joi.object({
    itemSelect: Joi.required(),
  }).unknown();

  return Schema.validate(data);
};
const LoginSchema = (data) => {
  const Schema = Joi.object({
    email: Joi.string().trim().lowercase().email(),
    password: Joi.string().pattern(
      new RegExp(/^.{8,}$/)
    ),
  }).unknown();

  return Schema.validate(data);
};

const CompanyAccountSchema = (data) => {
  const enumType = [
    "onsite",
    "remote",
    "hybrid",
  ];
  const Schema = Joi.object({
    companyNumber: Joi.string().required(),
    companyName: Joi.string().required(),
    industry: Joi.string().required(),
    country:Joi.string().required(),
    city:Joi.string().required(),
    type: Joi.string()
    .trim()
    .valid(...Object.values(enumType))
    .required(),
  }).unknown();

  return Schema.validate(data);
};
const CompanySchemaaccount = (data) => {
  const Schema = Joi.object({
    regNo: Joi.string().required(),
    companyName: Joi.string().required(),
    industry: Joi.string().required(),
    type:Joi.string().required(),
    country:Joi.string().required(),
    city:Joi.string().required(),
  }).unknown();

  return Schema.validate(data);
};

const openUserValidation = (data) => {
  const enumTitle = ["Ms", "Mrs", "Mr", "Dr"];
  const enumRole = [
    "candidate",
    "admin",
    "moderator",
    "companyAdmin",
    "companyStaff",
    "employee",
  ];
  const Schema = Joi.object({
    title: Joi.string()
      .trim()
      .valid(...Object.values(enumTitle))
      .required(),
    role: Joi.string()
      .trim()
      .valid(...Object.values(enumRole))
      .required(),

    firstName: Joi.string().trim().min(3).max(15).required(),

    lastName: Joi.string().trim().min(3).max(15).required(),

    email: Joi.string().trim().lowercase().email(),
  }).unknown();

  return Schema.validate(data);
};

const validationEmailSchema = (data) => {
  const enumStatus = ["active", "pending", "inactive"];
  const Schema = Joi.object({
    verificationToken: Joi.string().min(512).max(512),
    email: Joi.string().trim().lowercase().email().required(),

    password: Joi.string().pattern(
      new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)
    ),

    status: Joi.string()
      .trim()
      .valid(...Object.values(enumStatus)),

    id: Joi.objectId(),

    isOpenEndpoint: Joi.boolean(),
  }).unknown();

  return Schema.validate(data);
};

const jobRoleSchema = (data) => {
  const Schema = Joi.object({
    name: Joi.string().trim().min(3).max(30).required(),
  }).unknown();

  return Schema.validate(data);
};

const jobSchema = (data) => {
  const experienceLevelEnums = [
    "InternShip",
    "0-1",
    "1-2",
    "2-3",
    "3-4",
    "4-5",
    "5-6",
    "6-7",
    "8-10",
    "10+",
  ];
  const statusEnums = ["initial", "draft"];

  const Schema = Joi.object({
    name: Joi.string().trim().min(3).max(35).required(),
    company: Joi.objectId().required(),

    roles: Joi.array()
      .items(Joi.object().keys({ id: Joi.objectId(), name: Joi.string() }))
      .min(1)
      .max(5),

    experienceLevel: Joi.string()
      .trim()
      .valid(...Object.values(experienceLevelEnums))
      .required(),

    jobTypes: Joi.array(),

    minSalary: Joi.number().integer().min(15000),

    maxSalary: Joi.number().integer(),

    showSalary: Joi.boolean(),

    locationOptions: Joi.object().keys({
      inOffice: {
        allow: Joi.boolean(),
        visa: Joi.boolean(),
        citizensOnly: Joi.boolean(),
      },

      remote: {
        allow: Joi.boolean(),
        citizensOnly: Joi.boolean(),
        allOverTheWorld: Joi.boolean(),
      },
    }),

    tech: Joi.array()
      .items(
        Joi.object().keys({
          id: Joi.objectId(),
          level: Joi.number().integer().min(1).max(5),
          name: Joi.string(),
          _id: Joi.objectId(),
        })
      )
      .min(3)
      .max(12),

    description: Joi.string().trim().optional().allow("").max(2000),

    country: Joi.string().trim().optional().allow("").max(300),

    contactNumber: Joi.string().trim().optional().allow("").max(300),

    createdBy: Joi.objectId(),

    status: Joi.string()
      .trim()
      .valid(...Object.values(statusEnums)),

    noOfVacancies: Joi.number().integer().min(1).max(15),

    from: Joi.date().min(moment()),

    to: Joi.date().min(moment()),

    countryCode: Joi.string().trim().optional().allow(""),

    numberOfViews: Joi.number().integer(),

    price: Joi.number().integer().min(0),

    niceToHave: Joi.array()
      .items(
        Joi.object().keys({
          id: Joi.objectId(),
          name: Joi.string(),
          _id: Joi.objectId(),
        })
      )
      .max(8),
  }).unknown();

  return Schema.validate(data);
};

const jobStatusUpdateSchema = (data) => {
  const statusEnums = ["active", "inactive"];
  const Schema = Joi.object({
    id: Joi.objectId(),

    status: Joi.string()
      .trim()
      .valid(...Object.values(statusEnums)),
  }).unknown();

  return Schema.validate(data);
};
const hotelStatusUpdateSchema = (data) => {
  const statusEnums = ["active", "inactive"];
  const Schema = Joi.object({
    id: Joi.objectId(),

    status: Joi.string()
      .trim()
      .valid(...Object.values(statusEnums)),
  }).unknown();

  return Schema.validate(data);
};

module.exports = {
  userRegSchema,
  LoginSchema,
  CompanyAccountSchema,
  CompanySchemaaccount,
  EmployeeInitialSchema,
  UpdateEmployeeInitialSchema,
  UpdateSchema,
  EmployeeSignupSchema,
  UserInitialSchema,
  AddAttendanceInitialSchema,
  UpdateAttendanceInitialSchema,
  AttendanceInitialSchema,
  SalaryInitialSchema,
  SalaryMetaInitialSchema ,
  openUserValidation,
  validationEmailSchema,
  jobRoleSchema,
  jobSchema,
  jobStatusUpdateSchema,
  hotelUserRegSchema,
  hotelStatusUpdateSchema,
  selectHotelRegSchema,
};
