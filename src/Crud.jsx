import { useState } from "react";
import "./crud.css";
import data from "./data.json";

const Crud = () => {
  const [projectid, setprojectid] = useState("");
  const [projectnm, setprojectnm] = useState("");
  const [description, setDescription] = useState("");
  const [startdt, setStartdt] = useState("");
  const [enddt, setEnddt] = useState("");
  const [userdata, setUserdata] = useState(data);   


  const Add = (e) => {
    e.preventDefault();

    let formdata = {projectId: projectid,projectname: projectnm,Description: description,StartDate: startdt,EndDate: enddt};

    console.log(userdata)

    let sdata = userdata.find(item => item.projectId === projectid);

    if(sdata)
    {
      sdata.projectname=projectnm
      sdata.Description=description
      sdata.StartDate=startdt
      sdata.EndDate=enddt

      console.log(sdata);
    }
    else{
      setUserdata(userdata);
      userdata.push(formdata);
    }

      

    setprojectid('');
    setprojectnm('');
    setDescription('');
    setStartdt('');
    setEnddt('');

     
  };

  // ----------------------edit-------------------------


  const editdata = (projectId) =>{

    let findData = userdata.find(item => item.projectId === projectId);
    console.log(findData);
    setprojectid(findData.projectId);
    setprojectnm(findData.projectname);
    setDescription(findData.Description);
    setStartdt(findData.StartDate);
    setEnddt(findData.EndDate);
  };



  // ----------------------delete-------------------------

  const deletedata = (projectId) =>{

    let deletedata = userdata.filter(item => item.projectId !== projectId);
      setUserdata(deletedata)
      console.log(userdata);
  };
  
  return (
    <div>
      <div className="container">
        <div className="row">
          <h1 className="text-center py-2 bg-primary text-light">CRUD APP</h1>
          <div className="col">
            <div className=" pt-4">
              <form method="post">
                <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                    Project Id
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputPassword1"
                    value={projectid}
                    onChange={(e) => {
                      setprojectid(e.target.value);
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    Project Name
                  </label>
                  <input
                    type="text"
                    value={projectnm}
                    className="form-control"
                    id="exampleInputPassword1"
                    onChange={(e) => {
                      setprojectnm(e.target.value);
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    cols="30"
                    rows="8"
                    value={description}
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    Start Date
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    value={startdt}
                    id="exampleInputPassword1"
                    onChange={(e) => {
                      setStartdt(e.target.value);
                    }}
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    End Date
                  </label>
                  <input
                    type="date"
                    value={enddt}
                    className="form-control "
                    id="exampleInputPassword1"
                    onChange={(e) => {
                      setEnddt(e.target.value);
                    }}
                  />
                </div>
                <button type="submit" className="btn btn-primary" onClick={Add}>
                  Submit
                </button>
              
                
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="container pt-5">
        <table className="table">
          <thead className="text-center">
            <tr>
              <th scope="col">projectId</th>
              <th scope="col">projectname</th>
              <th scope="col">Description</th>
              <th scope="col">StartDate</th>
              <th scope="col">EndDate</th>
              <th scope="col" colSpan={2}>
                Action
              </th>
            </tr>
          </thead>
          <tbody className="text-center">
            {userdata.map((item, index) => {
              return (
                <>
                  <tr>
                    <th scope="row">{item.projectId}</th>
                    <td>{item.projectname}</td>
                    <td>{item.Description}</td>
                    <td>{item.StartDate}</td>
                    <td>{item.EndDate}</td>
                    <td>
                      <button type="submit" className="btn btn-dark w-100" onClick={() => editdata(item.projectId)}>
                        Edit
                      </button>
                    </td>
                    <td>
                      <button type="submit" className="btn btn-danger w-100" onClick={() => deletedata(item.projectId)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Crud;
