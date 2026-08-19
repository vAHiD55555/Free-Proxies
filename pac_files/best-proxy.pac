function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 118.145.141.251:44104",
        "SOCKS 103.43.191.71:8888",
        "SOCKS 47.238.134.126:8123",
        "SOCKS 68.183.7.53:9100",
        "SOCKS 163.223.231.155:59152",
        "SOCKS 47.238.134.126:4002",
        "SOCKS 141.98.85.49:1080",
        "SOCKS 88.201.248.85:1080",
        "SOCKS 47.251.87.74:4002",
        "SOCKS 64.83.12.6:1080",
        "SOCKS 202.62.42.92:1080",
        "SOCKS 118.145.141.251:44043",
        "SOCKS 150.241.91.238:7777",
        "SOCKS 47.238.60.156:80",
        "SOCKS 31.76.15.189:1080",
        "SOCKS 159.100.20.206:27866",
        "SOCKS 58.19.233.34:1080",
        "SOCKS 65.109.217.76:2223",
        "SOCKS 185.49.110.155:1080",
        "SOCKS 47.238.134.126:82",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}