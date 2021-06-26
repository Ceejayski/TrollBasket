import { useState, useEffect } from "react";
import Alert from "react-bootstrap/Alert";

const Message = ({ active }) => {
  const [show, setShow] = useState(true);
  // On componentDidMount set the timer

  // If show is false the component will return null and stop here
  if (!show) {
    return null;
  }

  // If show is true this will be returned
  return (
    <Alert variant="success" onClose={() => setShow(false)} dismissible>
      <p className="mb-0">Item added to cart successfully</p>
    </Alert>
  );
};

export default Message;
