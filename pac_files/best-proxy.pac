function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 171.253.95.241:1088",
        "SOCKS 8.215.15.163:9999",
        "SOCKS 103.76.149.140:1080",
        "SOCKS 89.208.106.37:32712",
        "SOCKS 109.199.105.194:1080",
        "SOCKS 98.175.31.222:4145",
        "SOCKS 171.253.95.24:1083",
        "SOCKS 79.137.192.65:30081",
        "SOCKS 43.164.3.124:1080",
        "SOCKS 217.25.229.244:2080",
        "SOCKS 1.245.175.180:1080",
        "SOCKS 109.200.111.171:1080",
        "SOCKS 5.161.50.82:8118",
        "SOCKS 161.35.90.93:1083",
        "SOCKS 150.136.58.221:1080",
        "SOCKS 171.25.158.95:1080",
        "SOCKS 95.105.28.76:1080",
        "SOCKS 144.91.111.48:1088",
        "SOCKS 15.235.176.12:60606",
        "SOCKS 191.44.118.236:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}