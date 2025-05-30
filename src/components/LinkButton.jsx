function LinkButton({ icon, label, link }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
      <button className="btn btn-outline-secondary d-flex align-items-center justify-content-center gap-2 rounded-pill py-2 w-100">
        <span className="fs-5">{icon}</span>
        <span className="fw-medium">{label}</span>
      </button>
    </a>
  );
}

export default LinkButton;
