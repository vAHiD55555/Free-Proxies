function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 31.43.194.184:1080",
        "SOCKS 38.49.210.79:40000",
        "SOCKS 193.233.218.213:1080",
        "SOCKS 91.107.176.117:9083",
        "SOCKS 175.27.250.85:44222",
        "SOCKS 103.36.11.18:8199",
        "SOCKS 216.106.179.216:49369",
        "SOCKS 124.248.191.117:1080",
        "SOCKS 82.102.11.164:3460",
        "SOCKS 194.190.169.197:3701",
        "SOCKS 120.133.82.62:44112",
        "SOCKS 14.238.8.63:9090",
        "SOCKS 203.25.208.163:1100",
        "SOCKS 47.82.112.38:1080",
        "SOCKS 77.110.102.252:1080",
        "SOCKS 122.246.100.61:7777",
        "SOCKS 175.27.250.85:44049",
        "SOCKS 59.46.216.131:30001",
        "SOCKS 45.145.41.177:1080",
        "SOCKS 93.123.118.15:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}