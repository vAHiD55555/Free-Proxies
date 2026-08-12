function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 194.163.174.78:1084",
        "SOCKS 202.62.42.167:1080",
        "SOCKS 195.19.52.187:1080",
        "SOCKS 129.150.57.5:55555",
        "SOCKS 103.189.218.76:6969",
        "SOCKS 195.135.255.98:1080",
        "SOCKS 152.32.203.130:10808",
        "SOCKS 5.45.119.70:1080",
        "SOCKS 59.38.113.185:20000",
        "SOCKS 152.32.219.123:10808",
        "SOCKS 111.119.162.248:10925",
        "SOCKS 84.254.198.175:1080",
        "SOCKS 185.70.129.183:1080",
        "SOCKS 72.195.34.42:4145",
        "SOCKS 195.211.124.50:1080",
        "SOCKS 156.238.250.51:8080",
        "SOCKS 103.179.252.74:3128",
        "SOCKS 195.91.180.201:1080",
        "SOCKS 146.56.185.39:34500",
        "SOCKS 43.106.60.21:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}