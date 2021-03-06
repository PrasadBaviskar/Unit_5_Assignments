import { useEffect } from "react";
import { useState } from "react/cjs/react.development";
import { JobBox } from "./JobBox";

export const AdminDashboard = () => {
  const [data, setData] = useState({});
  const [joblist, setJobList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/jobs")
      .then((data) => data.json())
      .then((d) => setJobList(d));
  }, []);

//   console.log(joblist[1].job_title);

  const submitData = (e) => {
    e.preventDefault();
    console.log(data);
    fetch("http://localhost:8000/jobs", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    }).then(() => {
      setData("");
    });
  };

  const handleinput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  return (
    <div className="dashboard">
      {/* <h1>Admin Dashboard</h1> */}
      <div>
        <h3> Add Job </h3>
        <form method="POST" onSubmit={submitData} className="logForm">
          <input
            type="text"
            onChange={handleinput}
            placeholder=" job title"
            name="job_title"
          />
          <input
            type="text"
            onChange={handleinput}
            placeholder=" job location"
            name="job_loc"
          />
          <input
            type="text"
            onChange={handleinput}
            placeholder=" job salary"
            name="salary"
          />
          <input
            type="text"
            onChange={handleinput}
            placeholder=" job type"
            name="type"
          />
          <input type="submit" value="Add Job" />
        </form>
      </div>

      <div>
        <h3> All Recruitements </h3>
        <div className="jobs">
          {/* {joblist.map((job) => {
            return <JobBox key={job.id} data={job} />;
          })} */}
        </div>
      </div>
    </div>
  );
};
