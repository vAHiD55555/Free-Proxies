function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 77.238.237.253:41414",
        "SOCKS 45.10.42.68:1080",
        "SOCKS 109.120.133.253:9999",
        "SOCKS 149.129.255.179:3128",
        "SOCKS 98.144.147.140:1080",
        "SOCKS 202.62.42.167:1080",
        "SOCKS 150.136.58.221:1080",
        "SOCKS 72.195.34.58:4145",
        "SOCKS 176.126.70.111:16379",
        "SOCKS 160.250.54.4:9000",
        "SOCKS 45.192.9.27:1080",
        "SOCKS 89.208.106.37:32712",
        "SOCKS 80.66.72.152:888",
        "SOCKS 47.238.236.151:5555",
        "SOCKS 212.46.208.183:1080",
        "SOCKS 103.75.118.84:1080",
        "SOCKS 174.138.61.184:1080",
        "SOCKS 192.142.52.65:1080",
        "SOCKS 47.91.115.179:8118",
        "SOCKS 177.5.74.74:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}