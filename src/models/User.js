const mongoose = require('mongoose');
const moment = require('moment');
const { ObjectId } = mongoose.Schema.Types;

const { Schema } = mongoose;

const UserSchema = new Schema(
  {
    title: {
      type: String,
      enum: ["Ms", "Mrs", "Mr"],
      default: "Mr",
    },
    role: {
      type: String,
      enum: ["company-manager", "employee"],
      default: "company-manager",
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },

   

    

    firstName: String,
    lastName: String,
    email: String,
    phoneNumber: String,
    password: String,
    address: String,
    companyID: String,
    companyName: String,
    industry: String,
    regNo: String,
    nic: String,
    gender: String,
    dateOfBirth: String,
    joinedDate: String,
    designation: String,
    epf8: String,
    epf12: String,
    totalEpf: String,
    apitTax: String,
    etf: String,
    finalSalary: String,
    refreshTokens: [String],
    fcmToken: {
      data: String,
      default: "",
    },
    lastSeen: Date,
    passwordLastUpdate: Date,
    companyID: { type: mongoose.Schema.Types.ObjectId, ref: "Company" },
  },
  {
    timestamps: true,
    toObject: {
      virtuals: true,
    },
    toJSON: {
      virtuals: true,
    },
  }
);


function getFullName() {
  return `${this.title} ${this.firstName} ${this.lastName}`;
}

function convertDate() {
  return moment(this.createdAt).format('YYYY-MM-DD hh:mm:ss A');
}

UserSchema.virtual('fullName').get(getFullName);

UserSchema.virtual('joined').get(convertDate);

module.exports = mongoose.model('User', UserSchema);
