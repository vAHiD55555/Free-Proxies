function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 121.205.213.141:4216",
        "SOCKS 208.113.222.205:57226",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 154.205.147.234:1080",
        "SOCKS 54.215.46.91:20087",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 38.196.251.134:999",
        "SOCKS 91.84.99.28:80",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 116.96.210.205:1007",
        "SOCKS 72.10.160.94:29225",
        "SOCKS 78.63.115.20:8899",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 183.166.132.124:3000",
        "SOCKS 193.181.35.43:8118",
        "SOCKS 116.105.222.48:10002",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 188.166.104.152:49981",
        "SOCKS 103.187.86.3:8182",
        "SOCKS 175.24.2.65:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}