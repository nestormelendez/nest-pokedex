/* eslint-disable prettier/prettier */
export interface HttAdapter {
  get<T>(url: string): Promise<T>;
}
