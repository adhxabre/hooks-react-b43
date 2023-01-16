import React from "react";

import cssModules from "./form.module.css";

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
//     backgroundColor: "#fff",
//     border: "1px solid orangered",
//     borderRadius: ".25rem",
//   },
// };

export default function Form() {
  return (
    <form className={cssModules.form}>
      <div className={cssModules.formGroup}>
        <label htmlFor="username" className={cssModules.formLabel}>
          Username
        </label>
        <input
          id="username"
          placeholder="Input username"
          className={cssModules.formInput}
        />
      </div>
    </form>
  );
}
