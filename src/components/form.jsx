import React from "react";

import cssModules from "./form.module.css";

import { Form as Forms, Row, Col } from "react-bootstrap";

// const styles = {
//   form: {
//     margin: "16px 20% 0",
//   },
//   formGroup: {
//     marginBottom: "16px",
//   },
//   formLabel: {
//     marginBottom: "8px",
//     display: "inline-block",
//   },
//   formInput: {
//     display: "block",
//     width: "100%",
//     padding: ".375rem .75rem",
//     fontSize: "1rem",
//     lineHeight: 1.5,
//     color: "#212529",
//     backgroundColr
// };

export default function Form() {
  return (
    <Forms>
      <Row>
        <Forms.Group as={Col} md="5">
          <Forms.Label htmlFppr>Username</Forms.Label>
          <Forms.Control type="text" placeholder="Your username" required />
        </Forms.Group>
        <Forms.Group as={Col} md="5">
          <Forms.Label>Password</Forms.Label>
          <Forms.Control type="password" placeholder="Your password" required />
        </Forms.Group>
      </Row>
    </Forms>
  );
}
