function Header() {
  return (
    <header style={{
      padding: '24px',
      borderBottom: '1px solid var(--color-border)',
      textAlign: 'center'
    }}>
      <h1 style={{ margin: 0, fontSize: '28px' }}>StudySync</h1>
      <p style={{ color: 'var(--color-text-muted)', marginTop: '8px' }}>
        Find your next study partner
      </p>
    </header>
  );
}

export default Header;