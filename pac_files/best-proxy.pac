function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.151.74.5:2025",
        "SOCKS 91.240.45.70:1080",
        "SOCKS 120.133.82.62:44142",
        "SOCKS 81.168.119.85:443",
        "SOCKS 65.21.212.113:9050",
        "SOCKS 45.192.9.27:1080",
        "SOCKS 27.155.93.29:5080",
        "SOCKS 45.130.201.172:1080",
        "SOCKS 118.145.141.251:44208",
        "SOCKS 103.239.201.10:58765",
        "SOCKS 118.145.141.251:44020",
        "SOCKS 103.133.26.73:3128",
        "SOCKS 72.195.34.60:27391",
        "SOCKS 5.255.113.177:1080",
        "SOCKS 118.145.141.251:44225",
        "SOCKS 111.119.162.248:10939",
        "SOCKS 46.37.123.166:10808",
        "SOCKS 223.99.197.190:11012",
        "SOCKS 95.215.8.84:30755",
        "SOCKS 111.48.191.24:7890",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}