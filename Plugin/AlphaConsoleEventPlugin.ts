import IGoalScoredEvent from "../Schema/AlphaConsoleEvent/GoalScoredEvent";

// TODO fix types
export default class AlphaConsoleEventPlugin {
  constructor(public pluginName: string) {}

  public onGoalScoredEvent(_data: IGoalScoredEvent) {}
  public onMatchEndEvent(_data: any) {}
}

// ? [Usage]
// ? Usage information can be located here:
// TODO Add link for AlphaConsoleEventPluginExample public repo
// TODO which should contain a README.md with information about
// TODO how to use it to create a plugin, and run it with the
// TODO AlphaConsoleEventServer program
