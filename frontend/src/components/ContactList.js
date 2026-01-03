import React from 'react';

const ContactList = ({ contacts, onEdit, onDelete }) => {
  if (contacts.length === 0) {
    return <div className="no-contacts">No contacts found. Add your first contact!</div>;
  }

  return (
    <div className="contact-list">
      {contacts.map((contact) => (
        <div key={contact._id} className="contact-card">
          <div className="contact-info">
            <h3>{contact.firstName} {contact.lastName}</h3>
            <p>📧 {contact.email}</p>
            <p>📱 {contact.phone}</p>
            {contact.company && <p>🏢 {contact.company}</p>}
            {contact.jobTitle && <p>💼 {contact.jobTitle}</p>}
          </div>
          <div className="contact-actions">
            <button onClick={() => onEdit(contact)} className="btn-edit">
              Edit
            </button>
            <button onClick={() => onDelete(contact._id)} className="btn-delete">
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
