import React from "react";

export const Tab = (props) => {
  const { label, activeTab, onClick } = props;

  const onClickTab = () => {
    onClick(label);
  };

  let className = "tablinks";
  if (activeTab === label) {
    className += " tab-link-active";
  }

  return (
    <button className={className} onClick={onClickTab}>
      {label}
    </button>
  );
};
