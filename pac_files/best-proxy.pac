function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 195.19.51.20:1080",
        "SOCKS 103.171.82.213:8080",
        "SOCKS 124.41.225.101:1080",
        "SOCKS 107.161.168.159:3333",
        "SOCKS 83.147.216.208:1080",
        "SOCKS 209.146.113.192:10800",
        "SOCKS 5.255.117.127:1080",
        "SOCKS 34.96.238.40:8080",
        "SOCKS 31.76.80.215:1080",
        "SOCKS 194.58.97.165:9050",
        "SOCKS 34.69.61.247:80",
        "SOCKS 103.82.20.76:8080",
        "SOCKS 104.154.186.48:80",
        "SOCKS 103.56.206.67:4000",
        "SOCKS 193.141.65.194:2080",
        "SOCKS 119.148.31.170:22122",
        "SOCKS 47.237.107.41:8443",
        "SOCKS 103.206.68.241:1080",
        "SOCKS 38.242.156.163:9050",
        "SOCKS 194.87.191.118:20090",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}