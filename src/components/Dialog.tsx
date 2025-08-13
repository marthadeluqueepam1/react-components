import React from "react";
import { createPortal } from "react-portal";
import FocusTrap from "focus-trap-react";

type DialogProps = {
  title: string | JSX.Element; // Modal title (string or JSX)
  children: JSX.Element; // Modal body content
  onClose: () => void; // Callback for handling close button (×)
  isOpen: boolean; // Whether the modal is visible
};

const Dialog: React.FC<DialogProps> = ({ title, children, onClose, isOpen }) => {
  if (!isOpen) return null; // If the dialog is not open, render nothing

  // The actual dialog element
  const modalContent = (
    <div
      style={{
        position: "fixed",
        top: "0",
        left: "0",
        width: "100vw",
        height: "100vh",
        background: "rgba(0, 0, 0, 0.5)", // Semi-transparent backdrop
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000, // Ensure the modal is above other elements
      }}
    >
      <FocusTrap>
        <div
          role="dialog"
          aria-labelledby="dialog-title"
          aria-modal="true"
          style={{
            background: "white",
            borderRadius: "8px",
            width: "90%",
            maxWidth: "500px",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.2)",
            overflow: "hidden",
          }}
        >
          {/* Modal Header */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "16px 20px",
              borderBottom: "1px solid #ddd",
            }}
          >
            <h3 id="dialog-title" style={{ margin: 0, fontSize: "18px" }}>
              {title}
            </h3>
            <button
              onClick={onClose} // Close the dialog on button click
              style={{
                fontSize: "16px",
                border: "none",
                background: "none",
                cursor: "pointer",
              }}
              aria-label="Close dialog"
            >
              &times;
            </button>
          </div>

          {/* Modal Body */}
          <div style={{ padding: "20px" }}>{children}</div>
        </div>
      </FocusTrap>
    </div>
  );

  // Use `createPortal` to render the modal outside of the standard DOM hierarchy
  return createPortal(modalContent, document.body);
};

export default Dialog;