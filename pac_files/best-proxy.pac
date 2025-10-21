function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 121.169.46.116:1090",
        "SOCKS 43.224.10.43:6667",
        "SOCKS 185.93.89.144:7809",
        "SOCKS 152.53.36.101:53983",
        "SOCKS 47.91.29.151:80",
        "SOCKS 137.184.228.194:40886",
        "SOCKS 115.127.132.225:1080",
        "SOCKS 125.227.225.157:3389",
        "SOCKS 43.157.34.94:1777",
        "SOCKS 82.209.251.53:45678",
        "SOCKS 185.93.89.180:5089",
        "SOCKS 160.25.8.26:11011",
        "SOCKS 185.93.89.182:7890",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 185.93.89.180:5823",
        "SOCKS 35.183.64.191:30309",
        "SOCKS 203.25.208.163:1111",
        "SOCKS 138.201.139.252:12344",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 185.93.89.146:18302",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}