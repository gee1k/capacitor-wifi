import { WebPlugin } from '@capacitor/core';
import { WifiErrorCode } from './definitions';
export class WifiWeb extends WebPlugin {
    async scanWifi() {
        throw this.unavailable(WifiErrorCode.METHOD_UNIMPLEMENTED);
    }
    async getCurrentWifi() {
        throw this.unavailable(WifiErrorCode.METHOD_UNIMPLEMENTED);
    }
    async connectToWifiBySsidAndPassword() {
        throw this.unavailable(WifiErrorCode.METHOD_UNIMPLEMENTED);
    }
    async connectToWifiBySsidPrefixAndPassword() {
        throw this.unavailable(WifiErrorCode.METHOD_UNIMPLEMENTED);
    }
    async requestPermissions() {
        throw this.unavailable(WifiErrorCode.METHOD_UNIMPLEMENTED);
    }
    async checkPermissions() {
        throw this.unavailable(WifiErrorCode.METHOD_UNIMPLEMENTED);
    }
    async disconnectAndForget() {
        throw this.unavailable(WifiErrorCode.METHOD_UNIMPLEMENTED);
    }
}
//# sourceMappingURL=web.js.map