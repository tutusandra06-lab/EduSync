import { useState } from 'react';
import './StudyForm.css';
const COURSES = ['Computer Architecture', 'Calculus', 'Marketing', 'Business Law'];
const TIME_SLOTS = ['Morning', 'Afternoon', 'Evening'];

function StudyForm({ onSubmit }) {
  const [course, setCourse] = useState('');
  const [timeSlot, setTimeSlot] = useState('');
const handleSubmit = (e) => {
  console.log('Button clicked!');
  e.preventDefault();
  if (!course || !timeSlot) return;
  onSubmit({ course, timeSlot });
};
  
  

  return (
    <form onSubmit={handleSubmit} className="study-form">
      <div className="form-group">
        <label htmlFor="course">Course</label>
        <select
          id="course"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        >
          <option value="">Select a course</option>
          {COURSES.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="timeSlot">Time Slot</label>
        <select
          id="timeSlot"
          value={timeSlot}
          onChange={(e) => setTimeSlot(e.target.value)}
        >
          <option value="">Select a time</option>
          {TIME_SLOTS.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      <button type="submit" className="btn-primary">Find Matches</button>
    </form>
  );
}

export default StudyForm;