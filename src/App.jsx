import { useState } from 'react';
import Header from './Header';
import Button from './Button';
// import StudyForm from './StudyForm';
// import ResultsList from './ResultsList';

function App() {
  const [matches, setMatches] = useState([]);

  const handleSearch = (course, timeSlot) => {
    // Developer 3's filter logic will plug in here
    console.log('Searching for:', course, timeSlot);
  };

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <Header />
      <main style={{ padding: '24px' }}>
        {/* PLACEHOLDER: <StudyForm onSearch={handleSearch} /> */}
        {/* PLACEHOLDER: <ResultsList matches={matches} /> */}
        <Button label="Find Matches" onClick={() => handleSearch('Calculus', 'Morning')} />
      </main>
    </div>
  );
}

export default App;