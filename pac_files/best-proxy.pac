function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.109.96.129:2610",
        "SOCKS 216.106.179.216:49433",
        "SOCKS 202.62.49.65:1080",
        "SOCKS 103.136.106.5:1081",
        "SOCKS 138.199.25.13:3905",
        "SOCKS 202.40.190.74:1080",
        "SOCKS 103.106.190.58:1080",
        "SOCKS 199.38.169.219:8080",
        "SOCKS 31.220.40.59:5080",
        "SOCKS 103.142.190.78:10808",
        "SOCKS 51.83.226.103:9055",
        "SOCKS 177.52.25.34:1080",
        "SOCKS 95.217.167.252:11111",
        "SOCKS 77.110.103.146:1080",
        "SOCKS 47.82.121.250:1011",
        "SOCKS 220.158.232.118:1080",
        "SOCKS 87.121.104.134:1080",
        "SOCKS 158.46.23.102:10080",
        "SOCKS 47.82.83.43:1011",
        "SOCKS 59.152.97.233:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}