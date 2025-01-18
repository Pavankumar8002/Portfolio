import React, { useState, useEffect } from 'react';
import { supabase } from './supabaseClient'; 
import '../styles/contacts.css'; 
import { jsPDF } from 'jspdf';

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  // Fetch contacts from the database
  useEffect(() => {
    if (loggedIn) {
      const fetchContacts = async () => {
        try {
          const { data, error } = await supabase.from('contacts').select('*');
          if (error) throw error;
          setContacts(data);
        } catch (err) {
          setError('Error fetching contacts.');
          console.error(err);
        } finally {
          setLoading(false);
        }
      };

      fetchContacts();
    }
  }, [loggedIn]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError(''); // Reset login error on submit
  
    try {
      // Trim inputs
      const trimmedUsername = username.trim();
      const trimmedPassword = password.trim();
  
      console.log('Trimmed username:', trimmedUsername);
      console.log('Trimmed password:', trimmedPassword);
  
      // Query Supabase with match (case-sensitive)
      const { data, error } = await supabase
        .from('users')
        .select('*')
        .eq('username', trimmedUsername) // Match username exactly
        .eq('password', trimmedPassword); // Match password exactly
  
      // Check for errors
      if (error) {
        console.error('Error returned from Supabase:', error);
        setLoginError('Error fetching user data.');
        return;
      }
  
      console.log('Matched user data:', data);
  
      if (!data || data.length === 0) {
        setLoginError('Invalid username or password.');
        return;
      }
  
      // Check if exactly one user is matched
      if (data.length === 1) {
        setLoggedIn(true); // User is logged in
        setLoginError('');
        setUsername('');
        setPassword('');
      } else {
        setLoginError('Multiple users found with this username.');
        console.error('More than one user found with the same username');
      }
  
    } catch (err) {
      setLoginError('Error logging in. Please try again later.');
      console.error('Login error:', err);
    }
  };
  
  

  // Handle contact deletion
  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this record?');

    if (confirmDelete) {
      try {
        const { error } = await supabase.from('contacts').delete().eq('id', id);
        if (error) throw error;

        // Remove the deleted contact from state
        setContacts((prevContacts) => prevContacts.filter(contact => contact.id !== id));

        alert('Contact deleted successfully.');
      } catch (err) {
        setError('Error deleting contact.');
        console.error(err);
      }
    }
  };

  // Export contact data to PDF
  const exportToPDF = () => {
    const doc = new jsPDF();

    // Add title
    doc.setFontSize(20);
    doc.text('Contact Submissions', 14, 20);

    // Add table headers
    doc.setFontSize(12);
    const headers = ['Name', 'Email', 'Message'];
    const startY = 30;
    doc.text(headers[0], 14, startY);
    doc.text(headers[1], 60, startY);
    doc.text(headers[2], 130, startY);

    // Add table data
    contacts.forEach((contact, index) => {
      const yOffset = startY + (10 * (index + 1));
      doc.text(contact.name, 14, yOffset);
      doc.text(contact.email, 60, yOffset);
      doc.text(contact.message, 130, yOffset);
    });

    // Save the PDF
    doc.save('contact_submissions.pdf');
  };

  // Loading or error states
  if (!loggedIn) {
    return (
      <div className="login-container">
        <h2>Login to view contact data</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label>Username: </label>
            <input 
              type="text" 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              required
            />
          </div>
          <div>
            <label>Password: </label>
            <input 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              required
            />
          </div>
          <div>
            <button type="submit">Login</button>
          </div>
          {loginError && <div className="login-error">{loginError}</div>}
        </form>
      </div>
    );
  }

  if (loading) return <div className="contacts-loading">Loading...</div>;
  if (error) return <div className="contacts-error">{error}</div>;

  return (
    <div className="contacts-container">
      <h1 className="contacts-heading">Contact Submissions</h1>

      <table className="contacts-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.message}</td>
              <td>
                {/* Delete button */}
                <button 
                  className="delete-btn" 
                  onClick={() => handleDelete(contact.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Export to PDF Button */}
      <button className="export-btn" onClick={exportToPDF}>
        Export to PDF
      </button>
    </div>
  );
};

export default Contacts;
