// EPlaylist
// * Stores Playlist ID
enum EPlaylist {
  DUEL_UNRANKED = 1,
  DOUBLES_UNRANKED = 2,
  STANDARD_UNRANKED = 3,
  CHAOS = 4,
  DUEL_RANKED = 10,
  DOUBLES_RANKED = 11,
  SOLO_STANDARD_RANKED = 12,
  STANDARD_RANKED = 13,
  SNOW_DAY_UNRANKED = 15, // ! DEPRECATED use SNOW_DAY_RANKED
  ROCKET_LABS = 16,
  HOOPS_UNRANKED = 17, // ! DEPRECATED use HOOPS_RANKED
  RUMBLE_UNRANKED = 18, // ! DEPRECATED use RUMBLE_RANKED
  DROPSHOT_UNRANKED = 23, // ! DEPRECATED use DROPSHOT_RANKED
  HOOPS_RANKED = 27,
  RUMBLE_RANKED = 28,
  DROPSHOT_RANKED = 29,
  SNOW_DAY_RANKED = 30,
  GHOST_HUNT = 31,
  BEACH_BALL = 32,
  SPIKE_RUSH = 33
}

export default EPlaylist;
