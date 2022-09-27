import React from "react";

export function Table({ heading, body }) {
   return (
    <table heading={heading} body={body}>
      <thead>
        <tr>
          {heading.map((head) => (
            <th>{head}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {body.map((row) => (
          <tr>
            {row.map((val) => (
              <td>{val}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
