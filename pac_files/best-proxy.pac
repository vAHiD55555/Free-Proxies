function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 201.165.172.3:1080",
        "SOCKS 129.158.48.4:9050",
        "SOCKS 212.237.125.216:6969",
        "SOCKS 103.118.255.136:5555",
        "SOCKS 31.220.81.59:9050",
        "SOCKS 186.226.167.191:3128",
        "SOCKS 38.76.215.92:1080",
        "SOCKS 46.37.123.166:1081",
        "SOCKS 88.218.206.170:22",
        "SOCKS 191.223.220.23:1080",
        "SOCKS 107.219.228.250:7777",
        "SOCKS 125.234.144.243:10001",
        "SOCKS 174.75.211.193:4145",
        "SOCKS 8.211.195.173:10001",
        "SOCKS 38.211.76.203:999",
        "SOCKS 139.28.49.231:8080",
        "SOCKS 34.84.162.206:38081",
        "SOCKS 112.202.249.185:8082",
        "SOCKS 95.216.170.155:9091",
        "SOCKS 91.209.71.84:9090",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}