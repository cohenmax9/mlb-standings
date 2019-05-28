import React from "react";

// Material Components
import Typography from "@material-ui/core/Typography";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";

// Components
import Team from "./Team";
import StandingsHeader from "./StandingsHeader";

// Types
import TeamData from "../types/TeamData.type";

interface Props {
  division: string;
  teamData: TeamData[];
}

export default ({ division, teamData }: Props) => (
  <div className="division">
    <Typography>{division}</Typography>
    <Table>
      <StandingsHeader />
      <TableBody>
        {teamData.map((teamData: TeamData) => (
          <Team key={teamData.team} {...teamData} />
        ))}
      </TableBody>
    </Table>
  </div>
);
