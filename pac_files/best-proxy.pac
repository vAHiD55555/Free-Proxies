function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 130.49.187.61:1082",
        "SOCKS 13.140.164.179:3530",
        "SOCKS 36.138.206.172:1080",
        "SOCKS 8.220.204.215:18080",
        "SOCKS 43.206.123.55:1080",
        "SOCKS 51.79.202.70:3128",
        "SOCKS 27.124.43.201:1080",
        "SOCKS 172.234.12.236:8080",
        "SOCKS 5.255.103.55:1080",
        "SOCKS 138.199.25.13:3908",
        "SOCKS 109.238.95.167:31004",
        "SOCKS 212.46.208.183:1080",
        "SOCKS 147.45.66.117:1082",
        "SOCKS 141.98.85.49:1080",
        "SOCKS 88.218.206.170:22",
        "SOCKS 193.233.218.213:1080",
        "SOCKS 8.211.195.139:1000",
        "SOCKS 47.251.74.38:3129",
        "SOCKS 70.166.65.160:4145",
        "SOCKS 103.157.78.22:8199",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}