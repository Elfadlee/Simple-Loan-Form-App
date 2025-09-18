<<<<<<< HEAD


// MsgBox.js

import "./style.css";

export default function MessageBoxMain({ msg, type = "info", isOpen = false, onClose }) {
  if (!isOpen) return null; 

  return (
    <div className={`MessageBox ${type}`}>
      <div className="MessageBoxHeader">
        <span style={{ color: "rgb(53, 69, 96)", fontWeight: "bold", fontSize: "15px", margin: "10px" }}>
          Message
        </span>
        <button className="close" onClick={onClose}>×</button>
      </div>

      <div className="MessageBoxBody">
        <p>{msg}</p>
      </div>

      <div className="MessageBoxFooter">
        <button className="close btnMsgBox" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

       

  

=======


// MsgBox.js

import "./style.css";

export default function MessageBoxMain({ msg, type = "info", isOpen = false, onClose }) {
  if (!isOpen) return null; 

  return (
    <div className={`MessageBox ${type}`}>
      <div className="MessageBoxHeader">
        <span style={{ color: "rgb(53, 69, 96)", fontWeight: "bold", fontSize: "15px", margin: "10px" }}>
          Message
        </span>
        <button className="close" onClick={onClose}>×</button>
      </div>

      <div className="MessageBoxBody">
        <p>{msg}</p>
      </div>

      <div className="MessageBoxFooter">
        <button className="close btnMsgBox" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

       

  

>>>>>>> dc14607 (Initial commit)
