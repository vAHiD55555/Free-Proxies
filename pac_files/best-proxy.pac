function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 62.60.131.203:9098",
        "SOCKS 37.120.133.137:3128",
        "SOCKS 67.43.236.20:17133",
        "SOCKS 152.228.212.223:29272",
        "SOCKS 119.81.189.194:80",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 157.175.147.228:10011",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 205.185.114.78:5556",
        "SOCKS 85.214.244.174:3128",
        "SOCKS 20.78.26.206:8561",
        "SOCKS 175.99.220.171:80",
        "SOCKS 198.177.254.157:4145",
        "SOCKS 119.81.189.194:8123",
        "SOCKS 221.202.27.194:10807",
        "SOCKS 169.239.181.213:8888",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 36.7.252.165:3256",
        "SOCKS 68.71.242.118:4145",
        "SOCKS 36.255.98.167:23006",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}