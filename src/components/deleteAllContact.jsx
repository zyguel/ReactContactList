import React from 'react';

const DeleteAllContact = () => {
return (
    
<div className="modal fade" id="deleteAllContactsModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="deleteAllContactsModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="modal-title fs-5" id="deleteAllContactsModalLabel">Delete All Contacts</h1>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <p>Are you sure you want to delete all contacts?</p>
        </div>
        <div class="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <form id="deleteAllContactsForm" method="POST" action="deleteAllContacts.php">
            <button type="submit" className="btn btn-danger">Delete All</button>
          </form>
        </div>
      </div>
    </div>
  </div>
  
);
}

export default DeleteAllContact;