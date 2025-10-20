function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 46.10.208.106:8192",
        "SOCKS 178.17.62.152:8881",
        "SOCKS 51.20.192.194:15311",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 94.143.137.77:3128",
        "SOCKS 115.127.83.142:1088",
        "SOCKS 167.172.253.162:4857",
        "SOCKS 213.250.198.146:7777",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 47.243.173.32:1011",
        "SOCKS 61.49.87.3:80",
        "SOCKS 103.237.134.242:7777",
        "SOCKS 138.68.60.8:1080",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 193.33.132.22:1080",
        "SOCKS 198.199.86.11:1080",
        "SOCKS 222.129.36.115:57114",
        "SOCKS 139.59.225.188:12827",
        "SOCKS 51.15.5.21:60349",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}