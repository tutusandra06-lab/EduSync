import { useState } from 'react';

function Button({ label, onClick }) {
  const [hover, setHover] = useState(false);

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        backgroundColor: hover ? '#B5583A' : 'var(--color-accent)',
        color: '#FFFFFF',
        border: 'none',
        borderRadius: '6px',
        padding: '10px 20px',
        fontSize: '15px',
        cursor: 'pointer',
        transition: 'background-color 0.2s ease'
      }}
    >
      {label}
    </button>
  );
}

export default Button;