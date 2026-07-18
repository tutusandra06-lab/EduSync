import './StudentCard.css';

function StudentCard({ student }) {
  return (
    <div className="student-card">
      <p className="student-name">{student.name}</p>
      <p className="student-detail">{student.course}</p>
      <p className="student-detail muted">{student.freeTime}</p>
    </div>
  );
}

export default StudentCard;