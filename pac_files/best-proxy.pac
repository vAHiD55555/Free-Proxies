function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 13.38.217.179:39170",
        "SOCKS 130.162.141.185:52916",
        "SOCKS 185.209.29.226:1080",
        "SOCKS 172.236.14.204:1080",
        "SOCKS 110.235.248.81:1080",
        "SOCKS 138.124.59.186:1080",
        "SOCKS 61.9.32.142:58765",
        "SOCKS 119.93.87.65:8080",
        "SOCKS 141.147.10.92:555",
        "SOCKS 47.253.201.85:7890",
        "SOCKS 146.0.77.29:9050",
        "SOCKS 141.136.13.51:8080",
        "SOCKS 170.106.177.188:47783",
        "SOCKS 36.147.78.166:80",
        "SOCKS 23.230.253.121:10808",
        "SOCKS 123.58.219.171:10808",
        "SOCKS 129.158.48.4:9050",
        "SOCKS 160.22.200.60:69",
        "SOCKS 118.194.228.2:10808",
        "SOCKS 104.219.236.127:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}