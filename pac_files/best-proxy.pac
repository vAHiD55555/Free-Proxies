function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 89.249.65.191:3128",
        "SOCKS 85.234.69.183:3128",
        "SOCKS 72.10.160.90:32931",
        "SOCKS 58.187.104.67:1082",
        "SOCKS 205.185.126.51:5556",
        "SOCKS 185.189.112.157:3128",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 138.201.139.252:12344",
        "SOCKS 195.154.43.198:39522",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 205.185.120.241:5556",
        "SOCKS 125.227.225.157:3389",
        "SOCKS 47.236.20.209:1145",
        "SOCKS 94.177.131.12:3128",
        "SOCKS 84.17.51.241:3128",
        "SOCKS 159.89.113.155:8080",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 58.187.104.67:1054",
        "SOCKS 120.77.203.0:443",
        "SOCKS 51.75.126.150:57328",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}