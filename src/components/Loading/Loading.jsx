import "./Loading.css";

const Loading = ({ texto = "Cargando..." }) => {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p className="loading-text">{texto}</p>
    </div>
  );
}

export default Loading;