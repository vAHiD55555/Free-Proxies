function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 157.180.121.252:46206",
        "SOCKS 20.210.39.153:8561",
        "SOCKS 113.162.238.200:20399",
        "SOCKS 20.210.76.178:8561",
        "SOCKS 27.79.192.226:16000",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 222.129.32.173:57114",
        "SOCKS 208.113.222.205:57226",
        "SOCKS 138.68.60.8:1080",
        "SOCKS 184.178.172.5:15303",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 20.27.15.49:8561",
        "SOCKS 27.79.184.207:16000",
        "SOCKS 27.71.139.208:16000",
        "SOCKS 43.224.10.43:6667",
        "SOCKS 173.209.63.66:8232",
        "SOCKS 152.53.168.53:44887",
        "SOCKS 72.10.160.174:21931",
        "SOCKS 147.75.34.74:10019",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}