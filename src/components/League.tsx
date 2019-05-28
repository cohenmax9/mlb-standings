import React from "react";

import Division from "./Division";

import LeagueDivisions from "../types/LeagueDivisions.type";

interface Props {
  league: string;
  leagueData: LeagueDivisions;
}

export default ({ league, leagueData }: Props) => (
  <div className="league">
    {Object.keys(leagueData).map((division: string) => (
      <Division
        key={`${league}-${division}`}
        division={`${league} ${division}`}
        teamData={leagueData[division]}
      />
    ))}
  </div>
);
