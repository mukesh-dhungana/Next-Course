import styles from "./navbar.module.css";

export const Navbar = ({ role }) => {
  return (
    <nav className="navbar">
      <p>Home</p>
      <p>About Us</p>
      <p>{role}</p>
    </nav>
  );
};
