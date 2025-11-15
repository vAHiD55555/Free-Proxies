function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 37.221.193.221:22727",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 72.10.160.94:23005",
        "SOCKS 89.58.45.94:36393",
        "SOCKS 157.180.121.252:56623",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 188.227.224.110:9051",
        "SOCKS 183.166.132.124:3000",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 51.158.64.130:16379",
        "SOCKS 89.58.45.94:56623",
        "SOCKS 43.133.207.140:1100",
        "SOCKS 165.227.174.249:33080",
        "SOCKS 37.221.193.221:11080",
        "SOCKS 20.210.76.178:8561",
        "SOCKS 223.25.109.146:8199",
        "SOCKS 195.93.173.58:9050",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}