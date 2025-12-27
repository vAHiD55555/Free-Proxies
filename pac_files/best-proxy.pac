function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 144.124.227.90:10808",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 67.43.228.250:32883",
        "SOCKS 188.227.224.110:9051",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 185.202.59.66:3128",
        "SOCKS 37.59.110.73:80",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 125.141.139.110:5566",
        "SOCKS 222.129.32.173:57114",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 120.77.203.0:443",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 49.0.26.183:1080",
        "SOCKS 172.104.4.144:9050",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}