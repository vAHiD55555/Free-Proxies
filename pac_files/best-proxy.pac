function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 110.235.255.252:1080",
        "SOCKS 202.62.49.65:1080",
        "SOCKS 93.115.18.235:8008",
        "SOCKS 203.189.152.79:1080",
        "SOCKS 111.119.162.248:10941",
        "SOCKS 194.163.174.78:1086",
        "SOCKS 34.84.162.206:38081",
        "SOCKS 91.107.150.19:9104",
        "SOCKS 112.105.12.235:1111",
        "SOCKS 194.163.174.78:1087",
        "SOCKS 78.109.34.192:8080",
        "SOCKS 195.135.255.98:1080",
        "SOCKS 171.253.95.28:2089",
        "SOCKS 201.116.64.226:7734",
        "SOCKS 8.215.25.3:2080",
        "SOCKS 59.152.97.233:1080",
        "SOCKS 59.38.113.185:20000",
        "SOCKS 82.193.116.160:21003",
        "SOCKS 139.59.44.192:9050",
        "SOCKS 171.253.95.3:1041",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}