import LeagueDivisions from "./LeagueDivisions.type";

export default interface TeamMap {
  AL: LeagueDivisions;
  NL: LeagueDivisions;
  [key: string]: LeagueDivisions;
}
