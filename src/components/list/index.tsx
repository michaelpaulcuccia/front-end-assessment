import React from "react";
import "./list.css";

interface ListProps {
  icon: React.ReactElement;
  text: string | React.ReactElement; //passing string or element to handle <sup>
}

const List: React.FC<ListProps> = ({ icon, text }) => {
  return (
    <div className="list-container">
      <div className="item-container">
        <div>{icon}</div>
        <div className="text-container">
          <h3 className="text-style">{text}</h3>
        </div>
      </div>
    </div>
  );
};

export default List;
