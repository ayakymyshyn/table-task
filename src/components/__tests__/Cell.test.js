import React from "react";
import { render } from "@testing-library/react";

import { Cell } from "../Table/Cell";

test("<Cell>", () => {
  const { getByTestId } = render(<Cell />);
  expect(getByTestId("preloader")).toBeTruthy();
});
