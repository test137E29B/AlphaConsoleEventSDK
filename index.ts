// ? VSCode File folding
// #region Imports
import AlphaConsoleEventPlugin from './Plugin/AlphaConsoleEventPlugin';
import IGoalScoredEvent from './Schema/AlphaConsoleEvent/GoalScoredEvent';
import EPlatform from './Schema/RocketLeague/Platform';
// #endregion

/**
 * * Export all declarations for convenience of
 * * importing for where Treeshaking is enabled
 * 
 * * Development Environments using Treeshaking automatically
 * * remove any export from here that isn't used by Consumers
 * 
 * * Development Environments that are not using Treeshaking at compile time
 * * are advised to import directly, rather than using destructuring as this
 * * will lower the overall module size by not importing unused declarations
 */
export {
  AlphaConsoleEventPlugin,
  IGoalScoredEvent,
  EPlatform
};
