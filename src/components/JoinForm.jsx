import React, { useState } from 'react';

export default function JoinForm({ session, onClose }) {
  const [name, setName] = useState('');

  const handleSubmit = () => {
    alert(`Thanks ${name}, you've joined the session at ${session.location}!`);
    onClose();
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', marginTop: '1rem' }}>
      <h3>Join Session on {session.date}</h3>
      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <button onClick={handleSubmit}>Confirm</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
}
