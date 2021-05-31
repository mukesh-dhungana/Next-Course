import styles from "./block.module.css";
import { useState } from "react";
import { Tooltip } from "../Tooltip/Tooltip";

export const Block = ({ text }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [color, setColor] = useState("");
  const [size, setSize] = useState("");

  const onMouseEnter = (blockType) => {
    const type = blockType.toLowerCase();
    setShowTooltip(true);

    if (["primary", "secondary"].includes(type)) {
      setColor(type);
    } else {
      setSize(type);
    }
  };

  const onMouseLeave = () => {
    setShowTooltip(false);
  };
  return (
    <div
      className={styles.block}
      onMouseEnter={() => onMouseEnter(text)}
      onMouseLeave={onMouseLeave}
    >
      <h1>{text}</h1>
      {showTooltip && (
        <Tooltip color={color || "primary"} size={size || "small"} />
      )}
    </div>
  );
};
