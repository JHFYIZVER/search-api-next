export default function Preloader() {
  return (
    <div className="preloader">
      <div className="spinner">Загрузка...</div>
      <style jsx>{`
        .preloader {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 24px;
          font-weight: bold;
          color: #0070f3;
        }
        .spinner {
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
