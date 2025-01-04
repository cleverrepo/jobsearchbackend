import mongoose from "mongoose";
const jobModel = mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    requirements: { type: [String], required: true },
    responsibilities: { type: [String], required: true },
    salary: {
      min: { type: Number },
      max: { type: Number },
    },
    employmentType: { type: String, required: true },
    company: {
      name: { type: String, required: true },
      website: { type: String },
      location: { type: String, required: true },
    },
    posting: {
      postedDate: { type: Date, default: Date.now },
      expiryDate: { type: Date },
    },
    application: {
      url: { type: String },
      contactEmail: { type: String, required: true },
      instructions: { type: String },
    },
    category: { type: String },
    tags: { type: [String] },
    isRemote: { type: Boolean, default: false },
    experienceLevel: { type: String },
  },
  {
    timeStamp: true,
  }
);

export default mongoose.model("Job", jobModel);
