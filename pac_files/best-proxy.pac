function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 181.129.183.19:53281",
        "SOCKS 20.210.76.178:8561",
        "SOCKS 95.164.113.232:2828",
        "SOCKS 67.43.228.252:21045",
        "SOCKS 222.59.173.105:45219",
        "SOCKS 67.43.236.20:6231",
        "SOCKS 184.178.172.5:15303",
        "SOCKS 40.71.46.210:8214",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 91.84.99.28:80",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 72.10.160.92:3709",
        "SOCKS 40.192.27.104:8080",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 121.205.215.44:4216",
        "SOCKS 51.159.159.73:80",
        "SOCKS 176.126.103.194:44214",
        "SOCKS 222.129.36.157:57114",
        "SOCKS 135.181.203.208:80",
        "SOCKS 20.210.76.104:8561",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}