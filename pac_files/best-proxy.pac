function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 80.249.81.179:9050",
        "SOCKS 141.98.85.49:1080",
        "SOCKS 144.91.121.61:1088",
        "SOCKS 83.222.24.37:1080",
        "SOCKS 194.163.182.6:1080",
        "SOCKS 203.25.208.163:1145",
        "SOCKS 185.200.188.234:10001",
        "SOCKS 185.200.196.119:1080",
        "SOCKS 47.85.195.135:1080",
        "SOCKS 202.62.62.113:1080",
        "SOCKS 116.48.170.221:11000",
        "SOCKS 46.146.216.44:1080",
        "SOCKS 117.236.124.166:3128",
        "SOCKS 72.195.34.42:4145",
        "SOCKS 8.213.197.208:443",
        "SOCKS 186.246.14.205:9050",
        "SOCKS 14.238.8.63:9090",
        "SOCKS 140.245.36.86:1080",
        "SOCKS 175.27.250.85:44142",
        "SOCKS 216.106.179.216:49328",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}