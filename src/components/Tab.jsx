import React from "react";

export const Tab = (props) => {
  const { label, activeTab, onClick } = props;

  const onClickTab = () => {
    onClick(label);
  };

  let className = "tab-list-item";
  if (activeTab === label) {
    className += " tab-list-active";
  }

  return (
    <li className={className} onClick={onClickTab}>
      {label}
    </li>
  );
};
