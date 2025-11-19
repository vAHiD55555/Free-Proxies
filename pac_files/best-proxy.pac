function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 183.166.132.124:3000",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 104.37.175.200:22292",
        "SOCKS 181.78.73.53:999",
        "SOCKS 173.236.187.104:40355",
        "SOCKS 89.58.45.94:12880",
        "SOCKS 152.53.171.242:48303",
        "SOCKS 89.58.45.94:25565",
        "SOCKS 139.159.97.42:9798",
        "SOCKS 152.53.171.242:52639",
        "SOCKS 104.248.158.27:25100",
        "SOCKS 213.35.126.34:10808",
        "SOCKS 47.236.26.237:1122",
        "SOCKS 223.25.110.250:8090",
        "SOCKS 120.224.234.71:7300",
        "SOCKS 77.105.137.42:8080",
        "SOCKS 14.142.36.210:1111",
        "SOCKS 89.58.45.94:37085",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 89.58.45.94:15455",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}