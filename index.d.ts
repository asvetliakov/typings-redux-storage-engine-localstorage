import {StorageEngine} from 'redux-storage';

export interface LocalStorageEngine extends StorageEngine {}

/**
 * Create local storage
 * @param key localstorage key
 */
export default function createEngine(key: string): LocalStorageEngine;
