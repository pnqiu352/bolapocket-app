import React, { useState } from 'react';
import JoinForm from './JoinForm';

const sessions = [
  { id: 1, date: '2025-07-10', time: '18:00', location: 'Gaydon Park' },
  { id: 2, date: '2025-07-12', time: '17:30', location: 'Warwick Field' },
];


export default function SessionList() {
  const [selectedSession, setSelectedSession] = useState(null);
  const [participants, setParticipants] = useState({
  1: ['Ali', 'Ben'],
  2: ['Sara'],
});
  return (
    <div>
      <h2>Upcoming Football Sessions</h2>
      <ul>
        {sessions.map(session => (
          <li key={session.id}>
            {session.date} @ {session.time} - {session.location}
            <button onClick={() => setSelectedSession(session)}>Join</button>
          </li>
        ))}
      </ul>
      {selectedSession && (
        <JoinForm
  session={selectedSession}
  onClose={() => setSelectedSession(null)}
  participants={participants[selectedSession.id] || []}
  onJoin={(name) => {
    setParticipants(prev => ({
      ...prev,
      [selectedSession.id]: [...(prev[selectedSession.id] || []), name]
    }));
  }}
/>)}
    </div>
  );
}
