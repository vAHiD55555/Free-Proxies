function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.77.37.39:2025",
        "SOCKS 203.25.208.163:1515",
        "SOCKS 54.253.183.151:26508",
        "SOCKS 47.82.65.128:1011",
        "SOCKS 194.163.174.78:1081",
        "SOCKS 217.171.85.178:1080",
        "SOCKS 191.252.111.160:7000",
        "SOCKS 103.121.120.242:1080",
        "SOCKS 167.233.233.145:2222",
        "SOCKS 167.86.86.221:9050",
        "SOCKS 8.215.25.3:2080",
        "SOCKS 185.187.170.175:1080",
        "SOCKS 177.52.25.34:1080",
        "SOCKS 138.124.125.198:3128",
        "SOCKS 160.250.54.4:9000",
        "SOCKS 203.189.153.170:1080",
        "SOCKS 202.62.49.65:1080",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 46.146.210.123:1080",
        "SOCKS 144.91.121.61:1088",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}