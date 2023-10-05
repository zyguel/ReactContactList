import React, { useState, useEffect } from 'react';

function ContactList() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch('https://todolist-sample.000webhostapp.com/read.php')
      .then(response => response.json())
      .then(({ status, data }) => {
        if (status === 200) {
          setContacts(Object.values(data));
        }
      });
  }, []);

  const deleteContact = (id) => {
    if (window.confirm('Are you sure you want to delete this contact?')) {
      fetch('https://todolist-sample.000webhostapp.com/delete.php', {
        method: 'POST',
        body: JSON.stringify({ id }),
        headers: { 'Content-Type': 'application/json' },
      })
        .then(response => response.json())
        .then(({ status, message }) => {
          alert(message);
          if (status === 200) {
            setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id));
          }
        });
    }
  }

  const submitContact = (lname, fname, emailAdd, contactNum) => {
    const obj = { lname, fname, emailAdd, contactNum };
    const data = new URLSearchParams(obj).toString();
    
    fetch('https://todolist-sample.000webhostapp.com/add.php', {
      method: 'POST',
      body: data,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    })
      .then(response => response.json())
      .then(({ status, message, data: newContactId }) => {
        alert(message);
        if (status === 200 && newContactId !== -1) {
          const newContact = {
            id: newContactId,
            lastName: lname,
            firstName: fname,
            email: emailAdd,
            number: contactNum,
          };
          setContacts(prevContacts => [...prevContacts, newContact]);
        }
      });
  }
  
  const editContact = (id, lname, fname, emailAdd, contactNum, curEmail) => {
    const obj = {
      id,
      lname,
      fname,
      emailAdd,
      contactNum,
      curEmail,
    };
    const data = new URLSearchParams(obj).toString();

    fetch('https://todolist-sample.000webhostapp.com/edit.php', {
      method: 'POST',
      body: data,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    })
    .then(response => response.json())
    .then(({ status, message }) => {
      alert(message);
      if (status === 200) {
        setContacts(contacts.map(contact => 
          contact.id === id ? { ...contact, lastName: lname, firstName: fname, email: emailAdd, number: contactNum } : contact
        ));
      }
    });
  };


  
 

    return (
      <div className="container mt-5">
        <h1 className="text-light">Contact List</h1>
        <div className="table-responsive">
          <table className="table table-dark">
            <thead>
              <tr>
                <th scope="col">Id #</th>
                <th scope="col">Lastname</th>
                <th scope="col">Firstname</th>
                <th scope="col">Email</th>
                <th scope="col">Address</th>
                <th scope="col">Contact number</th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody className="table-group-divider">
              {contacts.map((contact) => (
                <tr key={contact.id}>
                  <th scope="row">{contact.id}</th>
                  <td>{contact.lastName}</td>
                  <td>{contact.firstName}</td>
                  <td>{contact.email}</td>
                  <td>{contact.address}</td>
                  <td>{contact.phone_number}</td>
                  <td>
                    <a
                      href={`table-operations/edit_contact.php?id=${contact.id}`}
                      className="btn btn-primary"
                    >
                      Edit
                    </a>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => this.deleteContact(contact.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
 
}

export default ContactList;
