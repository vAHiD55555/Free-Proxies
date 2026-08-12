function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 146.56.191.98:14785",
        "SOCKS 161.35.90.93:1082",
        "SOCKS 152.228.134.176:8080",
        "SOCKS 216.106.179.216:49288",
        "SOCKS 103.96.233.58:1080",
        "SOCKS 79.76.59.115:1080",
        "SOCKS 8.213.222.157:6379",
        "SOCKS 37.18.73.60:5566",
        "SOCKS 34.43.46.91:80",
        "SOCKS 147.45.60.250:1082",
        "SOCKS 38.175.197.50:5555",
        "SOCKS 14.139.235.82:3128",
        "SOCKS 47.251.74.38:3129",
        "SOCKS 91.107.243.254:9096",
        "SOCKS 171.253.95.3:1081",
        "SOCKS 45.43.60.220:8080",
        "SOCKS 13.140.164.179:3530",
        "SOCKS 193.25.215.182:22222",
        "SOCKS 185.221.153.22:8443",
        "SOCKS 72.195.34.35:27360",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}