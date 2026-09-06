function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 77.239.106.24:1080",
        "SOCKS 8.215.3.250:104",
        "SOCKS 45.194.41.43:8080",
        "SOCKS 91.92.242.21:40415",
        "SOCKS 161.35.90.93:1081",
        "SOCKS 159.223.139.31:10000",
        "SOCKS 186.26.95.249:61445",
        "SOCKS 146.190.90.120:1080",
        "SOCKS 45.194.33.12:30001",
        "SOCKS 5.45.119.70:1080",
        "SOCKS 223.25.110.37:8199",
        "SOCKS 103.96.233.10:1080",
        "SOCKS 47.85.9.228:10800",
        "SOCKS 62.182.138.3:2080",
        "SOCKS 107.191.44.214:1081",
        "SOCKS 180.158.222.93:1080",
        "SOCKS 47.82.68.249:1011",
        "SOCKS 110.235.247.248:1080",
        "SOCKS 70.166.65.160:4145",
        "SOCKS 185.209.29.226:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}