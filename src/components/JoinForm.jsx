import React, { useState } from 'react';

export default function JoinForm({ session, onClose, participants, onJoin }) {
  const [name, setName] = useState('');

  const handleSubmit = () => {
    if (name.trim()) {
      onJoin(name);
      alert(`Thanks ${name}, you've joined the session at ${session.location}!`);
      onClose();
    }
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '1rem', marginTop: '1rem' }}>
      <h3>Join Session on {session.date}</h3>
      <p><strong>Location:</strong> {session.location}</p>

      <h4>Already Joined:</h4>
      <ul>
        {participants.length === 0 ? (
          <li>No one yet. Be the first!</li>
        ) : (
          participants.map((p, i) => <li key={i}>{p}</li>)
        )}
      </ul>

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

