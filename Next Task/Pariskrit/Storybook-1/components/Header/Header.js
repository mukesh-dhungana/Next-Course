import "./header.css";

export const Header = ({ title, size }) => {
  return <h1 className={`header header-${size}`}>{title}</h1>;
};
