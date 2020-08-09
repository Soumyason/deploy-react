import React from 'react';
import ReactDom from 'react-dom';
import { act } from "react-dom/test-utils";

let rootContainer;

beforeEach(() => {
  rootContainer = document.createElement("div");
  document.body.appendChild(rootContainer);
});

afterEach(() => {
  document.body.removeChild(rootContainer);
  rootContainer = null;
});

describe("App Component Testing", () => {
  it("Renders Title", () => {
    act(() => {
      ReactDOM.render(<App />, rootContainer);
    });
    const h2 = rootContainer.querySelector("h2");
    expect(h2.textContent).to.equal("SpacEx Launch programs");
  });
});
 