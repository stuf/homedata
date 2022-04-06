import { QueryInterface, Sequelize } from 'sequelize';

declare namespace Meta {
  export type UpDownFn = <T = any>(
    queryInterface: QueryInterface,
    Sequelize: Sequelize,
  ) => Promise<T>;

  export declare interface UpDown {
    up: UpDownFn;
    down: UpDownFn;
  }
}
