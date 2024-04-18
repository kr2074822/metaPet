import ReactDOM from 'react-dom';

const PortalContainer = ({ children }) => {
    const portalRoot = document.getElementById('overlay');
    return ReactDOM.createPortal(children, portalRoot);
  };
  
  export default PortalContainer;
  