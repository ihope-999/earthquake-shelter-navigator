import AsyncStorage from '@react-native-async-storage/async-storage';
import { Shelter } from '../../src/interface';
import { json } from 'node:stream/consumers';

export async function cacheShelters(key : string,shelter : Shelter[]){
    console.log(`${key} shelter saved to the DB`);
    await AsyncStorage.setItem(key,JSON.stringify(shelter));
}

export async function getCachedShelters(key: string){
    console.log("Trying to get cached shelters");
    const data = await AsyncStorage.getItem(key);
    return data ? JSON.parse(data) : null
}
