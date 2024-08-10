import { WebPlugin } from '@capacitor/core';
import type { ConnectToWifiResult, GetCurrentWifiResult, ScanWifiResult, WifiPlugin, PermissionStatus } from './definitions';
export declare class WifiWeb extends WebPlugin implements WifiPlugin {
    scanWifi(): Promise<ScanWifiResult>;
    getCurrentWifi(): Promise<GetCurrentWifiResult>;
    connectToWifiBySsidAndPassword(): Promise<ConnectToWifiResult>;
    connectToWifiBySsidPrefixAndPassword(): Promise<ConnectToWifiResult>;
    requestPermissions(): Promise<PermissionStatus>;
    checkPermissions(): Promise<PermissionStatus>;
    disconnectAndForget(): Promise<void>;
}
