import React from 'react';
import AddContactModal from './addContactModal.jsx';
import DeleteAllContact from './deleteAllContact.jsx';
const Hero = () => {
  return (
    <><div className="bg-dark text-secondary px-4 py-5 text-center">
      <div className="py-5">
        <h1 className="display-5 fw-bold text-white">Contact List with Database Implementation</h1>
        <div className="col-lg-6 mx-auto">
          <p className="fs-5 mb-4">Adding contacts and deleting is now easier than ever before. Note Please allow 2 seconds for each process since this site is auto refresh or auto redirect. Thanks!</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold" data-bs-toggle="modal" data-bs-target="#addContact">Add Contact</button>
            <button type="button" className="btn btn-danger btn-lg px-4" data-bs-toggle="modal" data-bs-target="#deleteAllContactsModal">Delete All contacts</button>
          </div>
        </div>
      </div>
    </div><AddContactModal />
    <DeleteAllContact /></>
  );
}

export default Hero;
