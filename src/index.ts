import { HSCodes, IHSCode } from './HSCode';

/*
 * @description: Get HSCode from top level or find hscode for particular level in nested case
 */
export const getHSCodeChild = (parent: string = 'TOTAL') => {
  return HSCodes.filter((e: IHSCode) => e.parent == parent);
};

/*
 * @description: Find hscode by name
 */
export const searchHSCodeByName = (hsCodeName: string) => {
  return HSCodes.filter(e => e.description.includes(hsCodeName));
};

/*
 * @description: get hscode by code
 */
export const searchHSCodeById = (hsCode: string) => {
  return HSCodes.filter(e => e.hscode.includes(hsCode));
};

/*
 * @description: get hscode by id
 */
export const getHSCode = (id: string) => {
  return HSCodes.find(e => e.hscode == id);
};

/*
 * @description: Return all HS code list
 */
export const getAllHSCode = () => {
  return HSCodes;
};
