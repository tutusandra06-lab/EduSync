import StudentCard from './StudentCard';
import './ResultsList.css';

function ResultsList({ matches }) {
  if (!matches || matches.length === 0) {
    return <p className="empty-state">No matches yet — try another time slot.</p>;
  }

  return (
    <div className="results-list">
      {matches.map((student) => (
        <StudentCard key={student.id} student={student} />
      ))}
    </div>
  );
}

export default ResultsList;