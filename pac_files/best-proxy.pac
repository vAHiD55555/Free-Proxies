function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.95.233.88:1082",
        "SOCKS 216.106.179.216:49455",
        "SOCKS 46.17.43.219:7890",
        "SOCKS 178.216.223.147:1080",
        "SOCKS 180.158.222.93:1080",
        "SOCKS 147.45.60.136:1082",
        "SOCKS 51.15.253.45:8080",
        "SOCKS 103.45.245.39:1080",
        "SOCKS 47.250.211.53:1080",
        "SOCKS 157.151.196.142:1080",
        "SOCKS 66.181.39.197:1080",
        "SOCKS 34.229.113.62:1080",
        "SOCKS 45.95.38.57:9050",
        "SOCKS 45.10.41.194:1080",
        "SOCKS 185.205.210.154:1085",
        "SOCKS 13.38.217.179:29788",
        "SOCKS 211.162.68.57:1088",
        "SOCKS 193.233.86.198:1080",
        "SOCKS 47.91.29.151:3129",
        "SOCKS 43.153.47.107:9050",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}