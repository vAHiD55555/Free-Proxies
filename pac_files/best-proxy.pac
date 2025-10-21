function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.109.57.42:3629",
        "SOCKS 120.77.203.0:443",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 47.236.30.44:1011",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 8.219.77.28:1122",
        "SOCKS 147.75.34.92:9443",
        "SOCKS 91.219.101.244:3128",
        "SOCKS 125.141.139.110:5566",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 185.93.89.180:4357",
        "SOCKS 174.75.211.222:4145",
        "SOCKS 193.203.163.205:1080",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 81.90.149.188:3128",
        "SOCKS 212.237.125.216:6969",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 221.134.152.75:7302",
        "SOCKS 152.53.36.101:41679",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}