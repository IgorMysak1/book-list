import React from "react";
import ReactDOM from "react-dom";

interface PortalProps {
  children: React.ReactNode;
  id: string;
}

export const Portal: React.FC<PortalProps> = ({ children, id }) => {
  const element = document.getElementById(id);
  const div = document.createElement("div");
  if (element === null) {
    div.setAttribute("id", id);
    document.body.appendChild(div);
  }
  return ReactDOM.createPortal(children, element ?? div);
};
