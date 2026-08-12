function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 47.85.195.135:1080",
        "SOCKS 212.58.132.5:1080",
        "SOCKS 123.0.24.154:9090",
        "SOCKS 122.51.226.233:2332",
        "SOCKS 110.235.255.252:1080",
        "SOCKS 216.106.179.216:49451",
        "SOCKS 171.253.95.3:1085",
        "SOCKS 8.211.49.86:7777",
        "SOCKS 109.199.105.194:1080",
        "SOCKS 124.248.191.117:1080",
        "SOCKS 173.255.248.203:9050",
        "SOCKS 171.253.95.241:1085",
        "SOCKS 138.199.25.13:3903",
        "SOCKS 23.149.108.178:9999",
        "SOCKS 5.255.103.55:1080",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 203.25.208.163:1145",
        "SOCKS 144.91.121.61:1088",
        "SOCKS 45.95.233.88:1082",
        "SOCKS 220.158.232.118:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}