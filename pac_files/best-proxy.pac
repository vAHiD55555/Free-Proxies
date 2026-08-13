function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 72.195.34.41:4145",
        "SOCKS 103.243.82.38:8008",
        "SOCKS 152.32.217.35:10808",
        "SOCKS 68.224.16.30:9100",
        "SOCKS 216.22.13.244:1084",
        "SOCKS 144.24.111.128:1088",
        "SOCKS 34.84.162.206:38081",
        "SOCKS 203.25.208.163:1145",
        "SOCKS 191.223.220.23:1080",
        "SOCKS 77.111.110.248:3128",
        "SOCKS 176.194.194.52:1080",
        "SOCKS 152.70.237.238:3128",
        "SOCKS 103.75.118.84:1080",
        "SOCKS 157.230.178.216:40000",
        "SOCKS 211.162.68.57:1088",
        "SOCKS 144.91.111.48:1088",
        "SOCKS 27.131.14.9:8812",
        "SOCKS 117.236.124.166:3128",
        "SOCKS 31.77.198.168:9050",
        "SOCKS 47.254.36.213:8181",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}