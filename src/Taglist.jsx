import React, { Component } from "react";
import { nanoid } from 'nanoid';
import './Taglist.css';

export default function Taglist({ tags }) {
  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    // You can pass formData as a fetch body directly:
    //fetch('/some-api', { method: form.method, body: formData });

    // Or you can work with it as a plain object:
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  }
  let key = 1
  const tableData = [["Par.Status", "Word"],
              ["Par.Meld.stoerm", "Word"],
              ["Par.Meld.Warnung", "Word"],
              ["Par.Bits.Anzeigen", "DWord"],
              ["Par.Bits.Steuer", "DWord"]].map(x => x.map((y) =><td key={nanoid()}>{y}</td>)).map(x => <tr key={nanoid()} >{x}</tr>);

  return (
    <form method="post" onSubmit={handleSubmit}>
      <table >
        <thead>
          <tr>
            <th>Tag</th>
            <th>type</th>
          </tr>
        </thead>
        <tbody>
          {tableData}
        </tbody>
      </table>
      <button id="addRow" type="button" key="addRow">Add new row</button>
      <button id="reset" type="reset" key="reset">Reset edits</button>
      <button id="submit" type="submit" key="submit">Save post</button>
    </form>
  )
}


















