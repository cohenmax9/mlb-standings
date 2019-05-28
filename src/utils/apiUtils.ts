// Types
import TeamData from "../types/TeamData.type";
import TeamMap from "../types/TeamMap.type";

// Constants
import teamMap from "../constants/teamMap";

const groupByLeagueAndDivision = (data: TeamData[]): TeamMap => {
  return data.reduce((grouped, team: TeamData) => {
    grouped[team.league][team.division].push(team);
    return grouped;
  }, teamMap);
};

const sortStandings = (teamMap: TeamMap): TeamMap => {
  Object.keys(teamMap).forEach(league => {
    Object.keys(teamMap[league]).forEach(division => {
      teamMap[league][division].sort(sortByWins);
    });
  });

  return teamMap;
};

const sortByWins = (team1: TeamData, team2: TeamData) =>
  team1.wins < team2.wins ? 1 : -1;

export const generateStandings = (data: TeamData[]) => {
  const teamMap = groupByLeagueAndDivision(data);
  return sortStandings(teamMap);
};

export const winningPercentage = (wins: number, losses: number) =>
  (wins / (wins + losses)).toFixed(3).toString().substring(1);
