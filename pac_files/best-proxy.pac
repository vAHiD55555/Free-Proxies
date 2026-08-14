function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 216.106.179.216:49284",
        "SOCKS 174.64.199.82:4145",
        "SOCKS 164.52.216.153:8080",
        "SOCKS 221.176.85.234:1080",
        "SOCKS 47.82.118.11:1011",
        "SOCKS 203.25.208.163:1100",
        "SOCKS 68.64.179.186:1080",
        "SOCKS 52.78.144.96:1080",
        "SOCKS 211.162.68.57:1088",
        "SOCKS 95.215.8.84:30755",
        "SOCKS 171.253.95.241:1085",
        "SOCKS 216.106.179.216:49280",
        "SOCKS 83.147.216.208:1080",
        "SOCKS 212.58.132.5:1080",
        "SOCKS 34.97.68.165:1080",
        "SOCKS 216.48.180.117:8080",
        "SOCKS 171.253.92.42:1085",
        "SOCKS 158.94.208.76:9050",
        "SOCKS 31.77.198.168:9002",
        "SOCKS 160.22.200.60:69",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}