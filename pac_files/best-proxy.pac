function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 112.28.149.152:8443",
        "SOCKS 175.27.250.85:44222",
        "SOCKS 83.238.167.189:9150",
        "SOCKS 103.136.107.70:1080",
        "SOCKS 216.48.180.117:8080",
        "SOCKS 5.35.85.97:1080",
        "SOCKS 157.90.234.5:443",
        "SOCKS 2.56.178.88:808",
        "SOCKS 15.204.235.27:1080",
        "SOCKS 5.255.117.250:1080",
        "SOCKS 147.45.66.116:1082",
        "SOCKS 112.120.201.241:3128",
        "SOCKS 161.35.90.93:1081",
        "SOCKS 216.106.179.216:49381",
        "SOCKS 8.211.170.91:14680",
        "SOCKS 175.27.250.85:44137",
        "SOCKS 3.129.27.9:17000",
        "SOCKS 65.109.87.121:28080",
        "SOCKS 147.45.221.111:1082",
        "SOCKS 64.181.240.152:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}