function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 138.128.247.206:9050",
        "SOCKS 158.94.208.76:9050",
        "SOCKS 204.152.192.13:1080",
        "SOCKS 5.35.85.97:1080",
        "SOCKS 204.216.136.58:9050",
        "SOCKS 110.235.255.252:1080",
        "SOCKS 110.235.246.62:1080",
        "SOCKS 107.191.44.214:1081",
        "SOCKS 109.238.95.167:31075",
        "SOCKS 43.230.193.154:1080",
        "SOCKS 217.12.209.4:1080",
        "SOCKS 47.250.211.53:1080",
        "SOCKS 177.5.74.74:1080",
        "SOCKS 202.62.49.65:1080",
        "SOCKS 45.74.178.43:9082",
        "SOCKS 43.164.3.124:1080",
        "SOCKS 103.236.134.210:1080",
        "SOCKS 5.230.201.154:1080",
        "SOCKS 147.45.66.117:1082",
        "SOCKS 8.215.25.3:2080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}