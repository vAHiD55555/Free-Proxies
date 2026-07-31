function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 113.160.132.26:8080",
        "SOCKS 103.236.134.210:1080",
        "SOCKS 110.235.255.252:1080",
        "SOCKS 213.188.203.54:1080",
        "SOCKS 185.209.29.226:1080",
        "SOCKS 54.193.215.124:80",
        "SOCKS 103.119.60.219:1080",
        "SOCKS 59.36.210.211:13552",
        "SOCKS 176.192.41.172:4444",
        "SOCKS 212.58.132.5:1080",
        "SOCKS 45.71.186.213:999",
        "SOCKS 119.148.51.30:22122",
        "SOCKS 83.222.24.37:1080",
        "SOCKS 138.197.68.35:4857",
        "SOCKS 160.22.17.4:9988",
        "SOCKS 91.209.71.84:9106",
        "SOCKS 43.208.245.90:3129",
        "SOCKS 45.93.170.251:888",
        "SOCKS 107.151.148.153:1080",
        "SOCKS 79.134.4.192:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}