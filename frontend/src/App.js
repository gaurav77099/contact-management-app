import React, { useState, useEffect } from 'react';
import { getContacts, createContact, updateContact, deleteContact } from './services/api';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import './App.css';

function App() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [editingContact, setEditingContact] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchContacts();
  }, [searchTerm]);

  const fetchContacts = async () => {
    try {
      setLoading(true);
      const response = await getContacts(searchTerm);
      setContacts(response.data);
      setError('');
    } catch (err) {
      setError('Failed to fetch contacts');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (contactData) => {
    try {
      if (editingContact) {
        await updateContact(editingContact._id, contactData);
      } else {
        await createContact(contactData);
      }
      fetchContacts();
      setEditingContact(null);
      setError('');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to save contact');
    }
  };

  const handleEdit = (contact) => {
    setEditingContact(contact);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this contact?')) {
      try {
        await deleteContact(id);
        fetchContacts();
      } catch (err) {
        setError('Failed to delete contact');
      }
    }
  };

  const handleCancel = () => {
    setEditingContact(null);
  };

  return (
    <div className="App">
      <header className="app-header">
        <h1>📇 Contact Management System</h1>
      </header>
      
      <main className="app-main">
        <div className="form-section">
          <h2>{editingContact ? 'Edit Contact' : 'Add New Contact'}</h2>
          <ContactForm 
            onSubmit={handleSubmit} 
            initialData={editingContact}
            onCancel={handleCancel}
          />
        </div>

        <div className="list-section">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search contacts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {error && <div className="error-message">{error}</div>}
          
          {loading ? (
            <div className="loading">Loading...</div>
          ) : (
            <ContactList 
              contacts={contacts} 
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          )}
        </div>
      </main>
    </div>
  );
}

export default App;