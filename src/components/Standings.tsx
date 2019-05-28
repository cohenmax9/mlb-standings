import React from "react";

// Material Components
import { Typography } from "@material-ui/core";

// Components
import League from "./League";

// Types
import TeamMap from "../types/TeamMap.type";

// Utils
import { generateStandings } from "../utils/apiUtils";

// Constants
import teamMap from '../constants/teamMap'

interface Props {}

interface State {
  data: TeamMap;
}

export default class Standings extends React.Component<Props, State> {
  state = {
    data: teamMap
  };

  fetchTeamData = async () => {
    const response = await fetch(
      "https://api.mobileqa.mlbinfra.com/api/interview/v1/records"
    );
    const data = await response.json();
    return data;
  };

  componentDidMount = async () => {
    const data = await this.fetchTeamData();
    this.setState({ data: generateStandings(data) });
  };

  render = () => (
    <>
    <Typography variant="h4">2018 Major League Baseball Standings</Typography>
      {Object.keys(this.state.data).map(league => (
        <League
          key={league}
          league={league}
          leagueData={(this.state.data as any)[league]}
        />
      ))}
    </>
  );
}
