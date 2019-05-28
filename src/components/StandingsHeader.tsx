import React from "react";

// Material Components
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

export default () => (
  <TableHead>
    <TableRow>
      <TableCell>Team</TableCell>
      <TableCell>Wins</TableCell>
      <TableCell>Losses</TableCell>
      <TableCell>PCT</TableCell>
    </TableRow>
  </TableHead>
);
