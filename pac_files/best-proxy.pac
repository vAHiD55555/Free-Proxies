function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 185.185.80.58:1088",
        "SOCKS 124.248.191.83:1080",
        "SOCKS 18.181.45.54:3128",
        "SOCKS 79.76.52.220:1080",
        "SOCKS 109.191.10.98:1080",
        "SOCKS 157.151.196.142:1080",
        "SOCKS 185.128.104.152:8443",
        "SOCKS 110.235.247.248:1080",
        "SOCKS 176.65.140.216:1085",
        "SOCKS 119.148.20.109:22122",
        "SOCKS 110.235.255.252:1080",
        "SOCKS 213.226.122.5:7788",
        "SOCKS 202.62.50.222:1080",
        "SOCKS 164.52.11.194:18080",
        "SOCKS 139.59.44.192:9050",
        "SOCKS 77.110.102.252:1080",
        "SOCKS 79.111.118.99:1080",
        "SOCKS 185.153.196.163:1080",
        "SOCKS 47.82.112.38:1080",
        "SOCKS 140.238.241.74:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}