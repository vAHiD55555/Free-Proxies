function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 95.165.79.126:1080",
        "SOCKS 161.35.90.93:1081",
        "SOCKS 45.32.195.109:9050",
        "SOCKS 220.158.233.26:1080",
        "SOCKS 161.35.90.93:1082",
        "SOCKS 47.238.130.212:9080",
        "SOCKS 116.96.32.160:1045",
        "SOCKS 211.162.68.57:1088",
        "SOCKS 78.188.230.81:3310",
        "SOCKS 144.31.255.9:1080",
        "SOCKS 128.140.113.110:8081",
        "SOCKS 59.46.216.131:30001",
        "SOCKS 119.148.7.10:22122",
        "SOCKS 109.172.55.227:1082",
        "SOCKS 110.49.66.210:8080",
        "SOCKS 34.229.113.62:1080",
        "SOCKS 112.105.12.235:1111",
        "SOCKS 109.200.111.171:1080",
        "SOCKS 195.133.64.192:10809",
        "SOCKS 45.43.63.37:10808",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}