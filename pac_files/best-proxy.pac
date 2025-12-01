function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 31.43.194.184:1080",
        "SOCKS 162.144.74.156:3620",
        "SOCKS 80.253.246.238:6618",
        "SOCKS 152.53.36.101:23653",
        "SOCKS 152.53.36.101:57837",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 152.53.36.101:31387",
        "SOCKS 202.5.60.46:1080",
        "SOCKS 174.75.211.222:4145",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 69.164.206.96:13024",
        "SOCKS 185.194.217.97:1080",
        "SOCKS 147.185.221.19:14365",
        "SOCKS 103.35.108.250:2024",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 38.194.246.34:999",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 165.227.104.122:48500",
        "SOCKS 98.190.102.40:4145",
        "SOCKS 222.129.36.92:57114",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}