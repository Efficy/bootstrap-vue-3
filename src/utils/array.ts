// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const arrayIncludes = (array: any[], value: any) => array.indexOf(value) !== -1
export const from = (...args: any[]): any[] => Array.from([...args])
export const concat = (...args: any[]): any[] => Array.prototype.concat.apply([], args)
