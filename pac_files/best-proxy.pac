function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 89.249.65.191:3128",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 103.230.62.102:1120",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 221.202.27.194:10809",
        "SOCKS 54.245.138.232:3128",
        "SOCKS 128.140.76.145:23126",
        "SOCKS 217.172.122.14:8080",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 43.133.32.76:1777",
        "SOCKS 222.129.38.21:57114",
        "SOCKS 84.17.51.235:3128",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 175.106.15.189:8080",
        "SOCKS 45.230.170.30:999",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 193.239.86.248:3128",
        "SOCKS 177.234.217.238:999",
        "SOCKS 38.172.128.172:8889",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}