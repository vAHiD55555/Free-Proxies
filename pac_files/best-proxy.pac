function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 159.8.114.37:80",
        "SOCKS 176.113.73.104:3128",
        "SOCKS 167.172.109.12:46249",
        "SOCKS 37.120.133.137:3128",
        "SOCKS 103.28.121.58:80",
        "SOCKS 185.236.203.208:3128",
        "SOCKS 190.9.109.198:999",
        "SOCKS 185.123.143.251:3128",
        "SOCKS 221.134.152.75:7302",
        "SOCKS 152.53.171.242:10025",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 95.216.17.79:3888",
        "SOCKS 202.62.49.65:1080",
        "SOCKS 47.236.20.209:1145",
        "SOCKS 91.238.104.171:2023",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 187.111.144.102:8080",
        "SOCKS 107.219.228.250:7777",
        "SOCKS 152.53.171.242:32187",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}