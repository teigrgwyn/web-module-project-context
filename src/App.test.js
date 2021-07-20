import React from "react";
import { BrowserRouter } from 'react-router-dom';

import App from "./App";

import { render } from "@testing-library/react";

test('Renders App', ()=> {
  render(<BrowserRouter><App /></BrowserRouter>);
});