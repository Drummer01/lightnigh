/**
 * Is this a function
 *
 * @param x
 */
export const isFunction = (x: any) => typeof x === 'function';

/**
 * Random double
 *
 * @param min
 * @param max
 */
export const random = (min : number, max: number) => Math.random() * (max - min) + min;

/**
 * Random integer
 *
 * @param min
 * @param max
 */
export const randomInt = (min: number, max: number) => Math.floor(random(min, max));
