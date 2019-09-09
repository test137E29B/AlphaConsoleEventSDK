import IBasePlayer from "../Custom/Player";
import IOnlineProduct from "../RocketLeague/OnlineProduct";

/**
 * ITradeCompletedEvent
 * * Stores Data provided by the onTradeCompleted AlphaConsoleEvent
 * * used by instances of AlphaConsoleEventPlugin
 */
export default interface ITradeCompletedEvent {
  localPlayer: IBasePlayer;
  remotePlayer: IBasePlayer;
  receivedItems: IOnlineProduct[];
  sentItems: IOnlineProduct[];
}

// ? [Usage] With Treeshaking:
// ?   import { ITradeCompletedEvent } from '@alphaconsole/alphaconsole-event-sdk';
// ? [Usage] Without Treeshaking:
// ?   import ITradeCompletedEvent from
// ?     '@alphaconsole/alphaconsole-event-sdk/Schema/AlphaConsoleEvent/ITradeCompletedEvent';