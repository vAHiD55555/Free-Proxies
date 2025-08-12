function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 72.10.164.178:28247",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 179.96.28.58:80",
        "SOCKS 103.130.183.165:8199",
        "SOCKS 174.64.199.79:4145",
        "SOCKS 222.129.32.188:57114",
        "SOCKS 115.221.245.167:1080",
        "SOCKS 20.210.76.178:8561",
        "SOCKS 72.10.160.172:28327",
        "SOCKS 8.219.236.9:1111",
        "SOCKS 222.129.36.115:57114",
        "SOCKS 27.71.130.52:16000",
        "SOCKS 159.203.61.169:1080",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 171.228.181.239:4001",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 89.117.145.245:3128",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 67.43.236.19:3527",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}