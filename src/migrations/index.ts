import * as migration_20240906_210709_initial from './20240906_210709_initial';

export const migrations = [
  {
    up: migration_20240906_210709_initial.up,
    down: migration_20240906_210709_initial.down,
    name: '20240906_210709_initial'
  },
];
