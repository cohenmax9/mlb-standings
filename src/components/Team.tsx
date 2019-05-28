import React from "react";

// Material Components
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

// Types
import TeamData from "../types/TeamData.type";

// Utils
import { winningPercentage } from "../utils/apiUtils";


export default React.memo(({ team, wins, losses }: TeamData) => (
  <TableRow key={team} className="stripedRow">
    <TableCell>{team}</TableCell>
    <TableCell>{wins}</TableCell>
    <TableCell>{losses}</TableCell>
    <TableCell>{winningPercentage(wins, losses)}</TableCell>
  </TableRow>
));

