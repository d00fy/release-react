import React from "react";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ContentAdd from "material-ui/svg-icons/content/add";
const FloatingBtn = () => {
  const style = {
    margin: 0,
    top: "auto",
    right: 20,
    bottom: 20,
    left: "auto",
    position: "fixed"
  };
  return (
    <FloatingActionButton style={style}>
      <ContentAdd />
    </FloatingActionButton>
  );
};
export default FloatingBtn;
