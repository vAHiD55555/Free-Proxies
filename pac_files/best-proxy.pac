function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 185.38.111.1:8080",
        "SOCKS 110.235.247.248:1080",
        "SOCKS 13.229.107.106:80",
        "SOCKS 203.25.208.163:1145",
        "SOCKS 66.135.227.178:4145",
        "SOCKS 115.221.242.131:9999",
        "SOCKS 78.157.57.71:3128",
        "SOCKS 185.236.202.170:3128",
        "SOCKS 193.239.86.247:3128",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 104.248.59.38:80",
        "SOCKS 134.122.21.142:33346",
        "SOCKS 20.78.213.56:80",
        "SOCKS 51.195.139.95:44648",
        "SOCKS 67.43.236.19:24515",
        "SOCKS 143.110.217.153:1080",
        "SOCKS 67.43.236.20:9735",
        "SOCKS 107.219.228.250:7777",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 37.120.133.137:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}