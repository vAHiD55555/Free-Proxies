function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 104.234.138.98:9080",
        "SOCKS 122.51.108.168:7890",
        "SOCKS 109.199.105.194:1080",
        "SOCKS 146.235.220.109:9050",
        "SOCKS 38.242.156.163:9050",
        "SOCKS 47.250.140.201:7000",
        "SOCKS 47.82.65.93:1011",
        "SOCKS 91.107.243.254:9091",
        "SOCKS 72.195.34.58:4145",
        "SOCKS 103.153.159.217:80",
        "SOCKS 43.164.3.124:1080",
        "SOCKS 211.162.68.57:1088",
        "SOCKS 82.102.11.164:3460",
        "SOCKS 103.216.49.147:1080",
        "SOCKS 88.201.248.85:1080",
        "SOCKS 124.248.191.117:1080",
        "SOCKS 47.82.81.87:1011",
        "SOCKS 8.213.197.208:45",
        "SOCKS 80.78.25.87:9050",
        "SOCKS 163.61.112.243:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}