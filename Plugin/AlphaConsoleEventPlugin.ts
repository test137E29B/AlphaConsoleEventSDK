import IGoalScoredEvent from "../Schema/AlphaConsoleEvent/GoalScoredEvent";

// TODO fix types
export default class AlphaConsoleEventPlugin {
  public onGoalScoredEvent(_data: IGoalScoredEvent) {}
  public onMatchEndEvent(_data: any) {}
}
