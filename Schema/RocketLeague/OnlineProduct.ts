import IProductAttribute from "./ProductAttribute";

/**
 * IOnlineProduct
 * * Used by Rocket League to store the dat about OnlineProducts
 * * These Products are those that are in Player inventories
 */
interface IOnlineProduct {
  instanceId: number;
  productId: number;
  attributes: IProductAttribute[];
  seriesId: EProductSeries;
  tradeHoldSeconds: number;
}

export enum EProductSeries {
  NONE = 0,
  POSTGAME = 1,
  CHAMPIONS_SERIES_1 = 2,
  CHAMPIONS_SERIES_2 = 3,
  CHAMPIONS_SERIES_3 = 6,
  CHAMPIONS_SERIES_4 = 7,
  PLAYERS_CHOICE_1 = 8,
  TURBO_SERIES = 10,
  NITRO_SERIES = 11,
  OVERDRIVE_SERIES = 13,
  ACCELERATOR_SERIES = 18,
  VELOCITY_SERIES = 19,
  HAUNTED_HALLOWS_SERIES = 20,
  SECRET_SANTA_SERIES = 21,
  VICTORY_SERIES = 26,
  SPRING_FEVER_SERIES = 27,
  TRIUMPH_SERIES = 29,
  IMPACT_SERIES = 33,
  RL_BEACH_BLAST_SERIES = 34,
  GOLDEN_EGG_SERIES_1 = 47,
  ZEPHYR_SERIES = 48,
  ELEVATION_SERIES = 190,
  GOLDEN_PUMPKIN_SERIES = 191,
  GOLDEN_GIFT_SERIES = 207,
  FEROCITY_SERIES = 299,
  TOTALLY_AWESOME_SERIES = 403,
  GOLDEN_EGG_SERIES_2 = 443,
  VINDICATOR_SERIES = 534
}

export enum EProductSlot {
  BODY,
  SKIN,
  PAINTFINISH,
  WHEELS,
  BOOST,
  HAT,
  ANTENNA,
  GOALEXPLOSION,
  SUPERSONICTRAIL,
  ENGINEAUDIO
}

export default IOnlineProduct;
