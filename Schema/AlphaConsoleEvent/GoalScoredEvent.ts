/**
 * IGoalScoredEvent
 * * Stores Data provided by the onGoalScored AlphaConsoleEvent
 * * used by instances of AlphaConsoleEventPlugin
 */
export default interface IGoalScoredEvent {
  // TODO: Add Data Schema
}

// ? [Usage] With Treeshaking:
// ?   import { IGoalScoredEvent } from '@alphaconsole/alphaconsole-event-sdk';
// ? [Usage] Without Treeshaking:
// ?   import IGoalScoredEvent from '@alphaconsole/alphaconsole-event-sdk/Schema/AlphaConsoleEvent/IGoalScoredEvent';