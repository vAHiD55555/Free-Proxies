function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 202.62.49.65:1080",
        "SOCKS 43.133.13.187:8889",
        "SOCKS 160.250.54.7:9000",
        "SOCKS 95.142.42.93:1080",
        "SOCKS 78.109.137.53:1080",
        "SOCKS 31.25.236.95:1080",
        "SOCKS 218.68.173.211:1081",
        "SOCKS 77.245.76.107:1080",
        "SOCKS 147.45.60.249:1082",
        "SOCKS 185.205.210.154:1088",
        "SOCKS 43.208.245.90:3129",
        "SOCKS 202.79.27.12:1080",
        "SOCKS 103.187.162.116:1080",
        "SOCKS 46.241.57.29:1080",
        "SOCKS 220.158.233.26:1080",
        "SOCKS 103.55.63.14:1080",
        "SOCKS 38.55.215.110:5555",
        "SOCKS 123.58.219.171:10808",
        "SOCKS 176.65.140.216:1085",
        "SOCKS 47.238.126.6:1011",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}