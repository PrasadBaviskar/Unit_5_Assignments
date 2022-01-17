import { useState } from "react";
import { useEffect } from "react/cjs/react.development";
import { JobBox } from "./JobBox";

export const Jobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/jobs")
      .then((data) => data.json())
      .then((d) => setJobs(d));
  }, []);
  console.log(jobs);
  return (
    <div>
      <h1> All Jobs </h1>
      <div className="AllJobs">
        {jobs.map((job) => {
          return (
            <div key={job.id} className="jobbox">
              <h4> Job : {job.job_title} </h4>
              <p> Location : {job.job_loc} </p>
              <p> Salary : {job.salary}</p>
              <p> Job Type : {job.type} </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
