function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 178.128.53.12:1080",
        "SOCKS 213.199.47.140:1080",
        "SOCKS 90.8.144.108:3317",
        "SOCKS 43.153.84.220:9050",
        "SOCKS 38.253.88.242:999",
        "SOCKS 103.137.75.65:1081",
        "SOCKS 167.179.119.114:5080",
        "SOCKS 144.22.165.206:1088",
        "SOCKS 101.36.104.46:10808",
        "SOCKS 51.83.226.103:9055",
        "SOCKS 58.187.192.47:1080",
        "SOCKS 220.158.232.118:1080",
        "SOCKS 72.195.34.35:27360",
        "SOCKS 43.153.79.124:47783",
        "SOCKS 170.106.188.46:5432",
        "SOCKS 91.222.237.40:1080",
        "SOCKS 51.222.104.72:1080",
        "SOCKS 36.138.206.172:1080",
        "SOCKS 178.216.223.147:1080",
        "SOCKS 43.173.124.23:8081",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}