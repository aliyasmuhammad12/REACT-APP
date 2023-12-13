import React, { useState, useEffect } from "react";
import axios from "axios";

const Admin = () => {
  const [contact, setContact] = useState([]);

  const fetchContact = async () => {
    const response = await axios.get("http://localhost:8089/getcontact");
    const data = await response.data;
    setContact(data);
  };
  useEffect(() => {
    fetchContact();
  }, []);
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">NAME</th>
          <th scope="col">EMAIL</th>
          <th scope="col">IMAGE</th>
          <th scope="col">MESSAGE</th>
        </tr>
      </thead>
      <tbody>
        {contact.map((contact) => {
          return (
            <tr>
              <th scope="row">{contact._id}</th>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td><img src={contact.ImageUrl} width={"100px"} height={"100px"} alt="b"/></td>
              <td >{contact.message}</td>
              <td className="d-flex p-5 gap-4">
                <button className="btn btn-danger">Reject</button>
                <button className="btn btn-success">Accept</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Admin;
