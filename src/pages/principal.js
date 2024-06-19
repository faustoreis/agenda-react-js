import './principal.css';

const Principal = ({ children }) => {
  return (
    <div className="page-main">
      <h1>Contatos</h1>
      {children}
    </div>
  );
};

export default Principal;
