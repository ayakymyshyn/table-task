import React from "react";
import { Preloader } from "./Preloader";

export const WrappedPreloader = () => (
  <tr className="table-preloader">
    <td>
      <Preloader />
    </td>
  </tr>
);
