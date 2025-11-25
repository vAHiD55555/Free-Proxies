function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 104.248.158.27:25100",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 134.209.29.120:1080",
        "SOCKS 67.205.153.110:51528",
        "SOCKS 58.16.145.74:7897",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 208.65.90.3:4145",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 121.205.215.44:4216",
        "SOCKS 103.174.178.131:1020",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 174.138.62.182:43715",
        "SOCKS 45.61.139.153:2525",
        "SOCKS 103.73.161.148:1080",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 91.107.138.98:2255",
        "SOCKS 187.111.144.102:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}