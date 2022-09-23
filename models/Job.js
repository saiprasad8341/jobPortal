import mongoose from "mongoose";

const JobSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, "Please provide Company"],
      maxlength: 50,
      trim: true,
    },
    position: {
      type: String,
      required: [true, "Please provide Company"],
      maxlength: 100,
      trim: true,
    },
    jobLocation: {
      type: String,
      required: true,
      maxlength: 100,
      default: "my city",
      trim: true,
    },
    status: {
      type: String,
      enum: ["interview", "declined", "pending"],
      default: "pending",
    },
    jobType: {
      type: String,
      enum: ["full-time", "part-time", "remote", "internship"],
      default: "full-time",
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please Provide User"],
    },
  },
  { timestamps: true }
);

export default mongoose.model("Job", JobSchema);
