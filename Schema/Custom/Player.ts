import EPlatform from "../RocketLeague/Platform";

// IBasePlayer
// * Used to store Player Data in a convenient interface
// * Base Interface for more fleshed out datasets
export default interface IBasePlayer {
  playerId: string;
  platform: EPlatform;
}

// ? [Usage] With Treeshaking:
// ?   import { IBasePlayer } from '@alphaconsole/alphaconsole-event-sdk';
// ? [Usage] Without Treeshaking:
// ?   import IBasePlayer from
// ?     '@alphaconsole/alphaconsole-event-sdk/Schema/Custom/IBasePlayer';