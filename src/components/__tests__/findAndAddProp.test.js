import React from "react";
import { render } from "@testing-library/react";

import { findAndAddProp } from "../../utils/findAndAddProp";

const arr1 = [
  {
    accountType: "1"
  },
  {
    accountType: "2"
  }
];

const arr2 = [
  {
    id: "1",
    title: "some1"
  },
  {
    id: "2",
    title: "some2"
  }
];

const result = [
  {
    accountType: "1",
    type: "some1"
  },
  {
    accountType: "2",
    type: "some2"
  }
];

test("findAndAddProp", () => {
  expect(findAndAddProp(arr1, arr2)).toEqual(result);
});
