/**
 * IGoalScoredEvent
 * * Stores Data provided by the onGoalScored AlphaConsoleEvent
 * * used by instances of AlphaConsoleEventPlugin
 */
export default interface IGoalScoredEvent {
  // TODO: Add Data Schema
}

// ? [Usage] With Treeshaking:
// ?           import { IGoalScoredEvent } from 'AlphaConsoleEventSDK';
// ? [Usage] Without Treeshaking:
// ?           import IGoalScoredEvent from 'AlphaConsoleEventSDK/Schema/AlphaConsoleEvent/IGoalScoredEvent';