import { useState } from 'react';
import Header from './Header';
import StudyForm from './StudyForm';
import ResultsList from './ResultsList';
import mockStudents from './mockData';

function App() {
  const [matches, setMatches] = useState([]);

  const handleSearch = (course, timeSlot) => {
    const filtered = mockStudents.filter(
      (s) => s.course === course && s.freeTime === timeSlot
    );
    setMatches(filtered);
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <Header />
      <main style={{ padding: '24px' }}>
        <StudyForm onSubmit={({ course, timeSlot }) => handleSearch(course, timeSlot)} />
        <ResultsList matches={matches} />
      </main>
    </div>
  );
}

export default App;