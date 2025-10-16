function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 121.169.46.116:1090",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 185.93.89.163:8041",
        "SOCKS 89.58.45.94:50000",
        "SOCKS 47.242.190.181:1024",
        "SOCKS 107.219.228.250:7777",
        "SOCKS 103.171.82.213:8080",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 152.53.36.101:28572",
        "SOCKS 219.154.210.157:9999",
        "SOCKS 51.48.124.225:41",
        "SOCKS 103.245.205.30:1080",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 72.10.160.93:30557",
        "SOCKS 89.58.45.94:57167",
        "SOCKS 8.222.181.144:1011",
        "SOCKS 167.172.159.43:39019",
        "SOCKS 188.165.233.121:9151",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 47.239.10.156:1100",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}