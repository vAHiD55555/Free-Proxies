function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 171.228.160.103:1001",
        "SOCKS 116.202.103.223:29210",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 212.237.125.216:6969",
        "SOCKS 67.43.228.254:3333",
        "SOCKS 103.109.57.42:3629",
        "SOCKS 152.53.168.53:44887",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 174.64.199.79:4145",
        "SOCKS 14.39.239.79:60489",
        "SOCKS 212.47.243.66:16379",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 129.150.39.242:8118",
        "SOCKS 171.231.175.71:7010",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 67.43.236.20:6231",
        "SOCKS 183.166.132.124:3000",
        "SOCKS 8.219.160.188:33333",
        "SOCKS 222.129.35.9:57114",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}