function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 159.65.158.30:8888",
        "SOCKS 101.91.242.198:6688",
        "SOCKS 174.138.62.182:43715",
        "SOCKS 43.167.173.222:6006",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 188.227.224.110:9051",
        "SOCKS 43.133.8.63:6006",
        "SOCKS 134.122.21.142:33346",
        "SOCKS 35.182.97.107:80",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 62.60.131.191:7660",
        "SOCKS 125.141.139.112:5566",
        "SOCKS 43.167.198.17:6006",
        "SOCKS 221.134.152.75:7302",
        "SOCKS 43.167.202.170:6006",
        "SOCKS 205.185.120.241:5556",
        "SOCKS 54.215.46.91:20087",
        "SOCKS 68.71.251.134:4145",
        "SOCKS 62.60.131.184:4115",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}