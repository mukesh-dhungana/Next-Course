export const Tooltip = ({ color, size }) => {
  return (
    <div className={`tooltip tooltip-${size} ${color}`}>
      <p>This is the tooltip content</p>
      <span className={`triangle triangle-${color}`}></span>
    </div>
  );
};
