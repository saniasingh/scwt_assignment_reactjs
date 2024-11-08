/* eslint-disable react/prop-types */
import Button from "react-bootstrap/Button";

function AppButton({
  variant = "filled",
  color = "black",
  children,
  style,
  ...props
}) {
  // Define base styles for filled and outline variants
  const styles = {
    filled: {
      background: color,
      color: "white",
      border: "none",
      boxShadow: "none",
      textTransform: "none",
    },
    outlined: {
      background: "transparent",
      color: color,
      border: `2px solid ${color}`,
      boxShadow: "none",
      textTransform: "none",
    },
    transparent: {
      background: "transparent",
      color: color,
      boxShadow: "none",
      border: "none",
      textTransform: "none",
    },
  };

  return (
    <Button
      style={{ ...styles[variant], ...style, fontFamily: "Inter" }}
      {...props}
    >
      {children}
    </Button>
  );
}

export default AppButton;
