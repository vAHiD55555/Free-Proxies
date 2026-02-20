function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 173.236.187.104:40355",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 157.230.220.25:4857",
        "SOCKS 141.11.42.163:1080",
        "SOCKS 163.172.161.35:16379",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 46.146.220.247:1080",
        "SOCKS 5.57.38.64:27913",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 20.27.15.111:8561",
        "SOCKS 91.185.33.151:1080",
        "SOCKS 155.138.149.91:3128",
        "SOCKS 123.182.233.70:7302",
        "SOCKS 107.174.55.219:10808",
        "SOCKS 20.27.14.220:8561",
        "SOCKS 82.165.61.217:8085",
        "SOCKS 103.242.175.241:8899",
        "SOCKS 104.37.175.200:22292",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}