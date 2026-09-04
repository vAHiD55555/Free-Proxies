function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 177.4.8.113:5555",
        "SOCKS 94.158.49.82:3128",
        "SOCKS 47.237.138.184:3128",
        "SOCKS 109.199.117.99:9050",
        "SOCKS 202.79.27.12:1080",
        "SOCKS 101.2.166.41:1080",
        "SOCKS 65.21.252.66:10809",
        "SOCKS 221.225.48.121:8989",
        "SOCKS 82.193.116.160:21003",
        "SOCKS 45.74.31.30:4006",
        "SOCKS 103.134.220.143:1080",
        "SOCKS 64.176.51.192:5758",
        "SOCKS 191.223.220.23:1080",
        "SOCKS 124.248.191.117:1080",
        "SOCKS 185.185.80.58:1088",
        "SOCKS 110.235.247.154:1080",
        "SOCKS 79.137.78.31:3128",
        "SOCKS 31.76.20.131:1080",
        "SOCKS 67.207.92.87:1088",
        "SOCKS 45.74.31.30:38180",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}