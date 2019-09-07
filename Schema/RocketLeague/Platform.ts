/**
 * EPlatform
 * * Used by Rocket League to store the Platform which the Player is using
 */
enum EPlatform {
  STEAM,
  XBOX,
  PS4,
  NINTENDO
}

export default EPlatform;

// ? [Usage] With Treeshaking:
// ?           import { EPlatform } from 'AlphaConsoleEventSDK';
// ? [Usage] Without Treeshaking:
// ?           import EPlatform from 'AlphaConsoleEventSDK/Schema/RocketLeague/EPlatform';
