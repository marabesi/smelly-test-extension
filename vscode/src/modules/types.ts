export type Smell = {
  type: string;
  lineStart: number;
  lineEnd: number;
  startAt: number;
  endsAt: number;
  description: string; //supports markdown
  diagnostic: string; //no support for markdown
};