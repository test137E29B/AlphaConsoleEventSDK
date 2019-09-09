// IProductAttribute
// * Base Attribute for all Product Attributes in Rocket League
export interface IProductAttribute {
  typename: string;
  replicated: boolean;
  requiresDynamicThumbnail: boolean;
  label: string;
}

export interface IProductAttributeCertified extends IProductAttribute {
  certification: EProductCertification;
  value: number;
}

export enum EProductCertification {
  AVIATOR = 1,
  PLAYMAKER = 2,
  SHOWOFF = 3,
  ACROBAT = 4,
  TACTICIAN = 5,
  SWEEPER = 6,
  GUARDIAN = 7,
  SCORER = 8,
  JUGGLER = 9,
  SNIPER = 10,
  PARAGON = 11,
  GOALKEEPER = 12,
  STRIKER = 13,
  TURTLE = 14,
  VICTOR = 15
}

export interface IProductAttributePainted extends IProductAttribute {
  paint: EProductPaint;
}

export enum EProductPaint {
  CRIMSON = 1,
  LIME = 2,
  BLACK = 3,
  SKYBLUE = 4,
  COBALT = 5,
  BURNTSIENNA = 6,
  FORESTGREEN = 7,
  PURPLE = 8,
  PINK = 9,
  ORANGE = 10,
  GREY = 11,
  TITANIUMWHITE = 12,
  SAFFRON = 13,
  GOLD = 14,
  ROSEGOLD = 15,
  WHITEGOLD = 16,
  ONYX = 17,
  PLATINUM = 18
}

export interface IProductAttributeQuality extends IProductAttribute {
  quality: EProductQuality;
}

export enum EProductQuality {
  COMMON = 0,
  UNCOMMON = 1,
  RARE = 2,
  VERYRARE = 3,
  IMPORT = 4,
  EXOTIC = 5,
  BLACKMARKET = 6,
  PREMIUM = 7,
  LIMITED = 8
}

export interface IProductAttributeSpecialEdition extends IProductAttribute {
  edition: EProductSpecialEdition;
}

export enum EProductSpecialEdition {
  HOLOGRAPHIC = 1,
  INFINITE = 2,
  INVERTED = 3,
  REMIXED = 5,
  COLORMATCH = 6
}

export interface IProductAttributeTeamEdition extends IProductAttribute {
  team: EProductTeamEdition;
}

export enum EProductTeamEdition {
  CLOUD9 = 2,
  DIGNITAS = 3,
  EVILGENIUSES = 4,
  G2 = 7,
  GHOSTGAMING = 8,
  MOUSESPORTS = 9,
  NRG = 10,
  PSG = 11,
  RENAULTVITALITY = 13,
  SPLYCE = 15,
  ROGUE = 17,
  TSM = 18
}

export default IProductAttribute;

// ? [Usage] With Treeshaking:
// ?   import { IProductAttribute } from '@alphaconsole/alphaconsole-event-sdk';
// ? [Usage] Without Treeshaking:
// ?   import IProductAttribute from '@alphaconsole/alphaconsole-event-sdk/Schema/RocketLeague/ProductAttribute';
