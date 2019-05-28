import TeamData from "./TeamData.type";

export default interface LeagueDivisions {
  East: TeamData[];
  Central: TeamData[];
  West: TeamData[];
  [key: string]: TeamData[]
}
