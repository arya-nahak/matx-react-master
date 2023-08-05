import React from "react";
import JobList from "./JobList";
import JobView from "./JobView";
import JobApplication from "./JobApplication";
import ApplyJob from "./ApplyJob";
import NewJob from "./NewJob";
import UserProfile from "./UserProfile";

const Jobs_admin = [
  { path: "/jobs/joblist", element: <JobList /> },
  { path: "/jobs/jobview", element: <JobView /> },
  { path: "/jobs/jobapplication", element: <JobApplication /> },
  { path: "/jobs/applyjob", element: <ApplyJob /> },
  { path: "/jobs/newjov", element: <NewJob /> },
  { path: "/jobs/userprofile", element: <UserProfile /> },
];

export default Jobs_admin;
