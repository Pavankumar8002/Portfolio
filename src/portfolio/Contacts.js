import React, { useEffect, useState } from 'react';
import { supabase } from './supabaseClient'; 
import '../styles/contacts.css'; 
import { jsPDF } from 'jspdf';  

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
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
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this record?');

    if (confirmDelete) {
      try {
        const { error } = await supabase.from('contacts').delete().eq('id', id);
        if (error) throw error;

        setContacts((prevContacts) => prevContacts.filter(contact => contact.id !== id));

        alert('Contact deleted successfully.');
      } catch (err) {
        setError('Error deleting contact.');
        console.error(err);
      }
    }
  };

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
            <th>Action</th> {/* Column for the delete button */}
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
