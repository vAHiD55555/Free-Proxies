function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 195.69.169.126:1080",
        "SOCKS 13.229.107.106:80",
        "SOCKS 206.123.156.214:4443",
        "SOCKS 5.255.99.75:1080",
        "SOCKS 206.123.156.184:29226",
        "SOCKS 104.248.59.38:80",
        "SOCKS 62.16.33.187:1080",
        "SOCKS 206.123.156.184:5699",
        "SOCKS 159.223.53.194:1080",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 38.34.179.12:8443",
        "SOCKS 38.34.179.91:8443",
        "SOCKS 206.123.156.209:8989",
        "SOCKS 206.123.156.230:5927",
        "SOCKS 206.123.156.185:42710",
        "SOCKS 222.71.131.131:1080",
        "SOCKS 188.113.182.218:1080",
        "SOCKS 84.17.51.235:3128",
        "SOCKS 176.113.73.104:3128",
        "SOCKS 206.123.156.229:4443",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}