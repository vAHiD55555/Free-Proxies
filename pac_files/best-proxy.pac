function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 69.164.206.96:13024",
        "SOCKS 212.23.69.121:1080",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 62.60.131.188:4152",
        "SOCKS 185.21.13.119:5555",
        "SOCKS 62.60.131.181:5286",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 125.141.139.112:5566",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 160.25.8.148:11011",
        "SOCKS 80.85.246.214:5555",
        "SOCKS 36.255.98.177:21043",
        "SOCKS 103.141.66.78:1080",
        "SOCKS 38.194.224.134:1452",
        "SOCKS 202.62.62.113:1080",
        "SOCKS 212.34.153.180:5555",
        "SOCKS 62.60.131.193:8010",
        "SOCKS 72.214.108.67:4145",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}