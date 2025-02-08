import { useState, useEffect } from 'react';
import NetInfo from '@react-native-community/netinfo';
import { MMKV } from 'react-native-mmkv';

// Initialized MMKV storage (Can use RealmDB to store large data in offline database or use RNFS for file system)
const storage = new MMKV();

export const useOfflineHandler = () => {
    const [isConnected, setIsConnected] = useState(true);

    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(state => {
            setIsConnected(state.isConnected);
        });

        return () => {
            console.log("Cleaning up NetInfo listener...");
            unsubscribe(); // to prevent memory leaks
        };
    }, []);

    const saveDataOffline = (key: string, data: any) => {
        storage.set(key, JSON.stringify(data));
    };

    const getOfflineData = (key: string) => {
        const storedData = storage.getString(key);
        return storedData ? JSON.parse(storedData) : null;
    };

    return { isConnected, saveDataOffline, getOfflineData };
};
