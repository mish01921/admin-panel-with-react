import React, { useState, Fragment } from 'react';
import { nanoid } from "nanoid";
import "./Misho.css";
import data from "./Mock-data.json";
import ReadOnlyRow from './ReadOnlyRow';
import EditableRow from './EditableRow';
import { Form } from 'semantic-ui-react';

function AdminM() {
  const [contacts, setContacts] = useState(data)
  const [addFormData, setAddFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  });

  const[editFormData, setEditFormData] = useState({
    fullName: "",
    address: "",
    phoneNumber: "",
    email: "",
  })

  const [editContactId, setEditcontactId] = useState(null)
  
  const handleAddFormChange = (event) =>{
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData)
  }

  const handleEditFormChange = (event) => {
    event.preventDefault()

    const fieldName = event.target.getAttribute("name")
    const fieldValue = event.target.value

    const newFormData = { ...editFormData }
    newFormData[fieldName] = fieldValue

    setEditFormData(newFormData)
  }

  const handleAddFormSubmit = (event) => {
    event.preventDefault()

  const newContact  = {
     id: nanoid(),
    fullName: addFormData.fullName,
    address: addFormData.address,
    phoneNumber: addFormData.phoneNumber,
    email: addFormData.email,
  };

  const newContacts = [...contacts, newContact];
  setContacts(newContacts)
  }

  const handleEditFormSubmite = (event) => {
    event.preventDefault()

    const editContact = {
      id: editContactId,
      fullName: editFormData.fullName,
      adress: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email
    }

    const newContacts = [...contacts]
  }

  const handleEditClick = (event, contact) =>{
    event.preventDefault();
    setEditcontactId(contact.id)

    const formValues = {
      fullName: contact.fullName,
      adrress: contact.adress,
      phoneNumber: contact.phoneNumber,
      email: contact.email,
    }
    setEditFormData(formValues)
  }

  return (
    <div className='app-container'>
       <Form>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <Fragment>
             {editContactId === contact.id ? (<EditableRow  editFormData={editFormData} handleEditFormChange={handleEditFormChange}/> 
              ) : (
              <ReadOnlyRow contact={contact} 
              handleEditClick={handleEditClick}
              />
              )}
            </Fragment>
          ))},
         
       
        </tbody>
      </table>
      </Form>
        <h2>Add new Contact</h2>
      <form onSubmit={handleAddFormSubmit}>
        <input 
          type="text"
          name="fullName"
          required="required"
          placeholder="Enter a name"
          onChange={handleAddFormChange}
        />
          <input 
          type="text"
          name="address"
          required="required"
          placeholder="Enter a address"
          onChange={handleAddFormChange}
        />
          <input 
          type="text"
          name="phoneNumber"
          required="required"
          placeholder="Enter a phone number"
          onChange={handleAddFormChange}
        />
          
          <input 
          type="email"
          name="email"
          required="required"
          placeholder="Enter a email"
          onChange={handleAddFormChange}
        />
        <button type="subbmit">Add</button>
      </form>

    </div>
  )
}

export default AdminM