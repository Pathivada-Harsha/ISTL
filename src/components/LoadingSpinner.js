function LoadingSpinner({ visible }) {
  if (!visible) return null;

  return (
    <>
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', backgroundColor: 'rgba(0, 0, 0, 0.7)', zIndex: 9998 }} />
      <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', zIndex: 9999 }}>
        <div className="multi-ring-spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <style jsx>{`
            .multi-ring-spinner {
              position: relative;
              width: 80px;
              height: 80px;
            }
            
            .multi-ring-spinner div {
              position: absolute;
              border: 4px solid transparent;
              border-radius: 50%;
              animation: spin 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
            }
            
            .multi-ring-spinner div:nth-child(1) {
              border-top-color: #007bff;
              width: 80px;
              height: 80px;
              animation-delay: 0s;
            }
            
            .multi-ring-spinner div:nth-child(2) {
              border-right-color: #28a745;
              width: 64px;
              height: 64px;
              top: 8px;
              left: 8px;
              animation-delay: -0.2s;
            }
            
            .multi-ring-spinner div:nth-child(3) {
              border-bottom-color: #ffc107;
              width: 48px;
              height: 48px;
              top: 16px;
              left: 16px;
              animation-delay: -0.4s;
            }
            
            .multi-ring-spinner div:nth-child(4) {
              border-left-color: #dc3545;
              width: 32px;
              height: 32px;
              top: 24px;
              left: 24px;
              animation-delay: -0.6s;
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
      </div>
    </>
  );
}

export default LoadingSpinner;