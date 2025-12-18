function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 208.65.90.3:4145",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 138.68.60.8:1080",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 45.204.208.22:60002",
        "SOCKS 61.160.66.130:5555",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 72.10.160.91:13103",
        "SOCKS 103.172.42.121:8086",
        "SOCKS 128.140.76.145:14954",
        "SOCKS 223.27.82.91:1080",
        "SOCKS 84.241.6.102:8080",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 128.140.76.145:22413",
        "SOCKS 203.25.208.163:1100",
        "SOCKS 72.10.160.173:1225",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 165.227.104.122:48500",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}