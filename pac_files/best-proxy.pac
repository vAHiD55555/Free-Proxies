function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 144.76.166.41:57170",
        "SOCKS 103.153.159.217:80",
        "SOCKS 78.140.223.167:1080",
        "SOCKS 77.110.102.252:1080",
        "SOCKS 93.90.232.32:1080",
        "SOCKS 202.62.55.95:1080",
        "SOCKS 72.195.34.41:4145",
        "SOCKS 220.158.233.26:1080",
        "SOCKS 47.86.42.224:1011",
        "SOCKS 212.113.99.167:10800",
        "SOCKS 87.239.251.202:1081",
        "SOCKS 140.245.109.203:1080",
        "SOCKS 216.106.179.216:49226",
        "SOCKS 34.43.46.91:80",
        "SOCKS 51.15.253.45:8080",
        "SOCKS 109.236.57.144:1080",
        "SOCKS 195.19.50.130:1080",
        "SOCKS 144.24.111.128:1088",
        "SOCKS 43.164.3.124:1080",
        "SOCKS 216.106.179.216:49161",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}