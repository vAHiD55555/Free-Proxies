function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 175.27.250.85:44234",
        "SOCKS 5.189.17.23:9050",
        "SOCKS 47.237.2.245:541",
        "SOCKS 221.176.85.236:1080",
        "SOCKS 115.193.135.121:1080",
        "SOCKS 154.219.125.240:58367",
        "SOCKS 223.25.109.163:8199",
        "SOCKS 216.106.179.216:49300",
        "SOCKS 47.76.144.139:800",
        "SOCKS 149.248.21.106:8080",
        "SOCKS 103.236.190.197:1080",
        "SOCKS 47.80.27.150:1080",
        "SOCKS 202.62.62.113:1080",
        "SOCKS 51.178.49.241:1088",
        "SOCKS 113.176.118.150:1080",
        "SOCKS 202.62.50.222:1080",
        "SOCKS 154.29.153.164:35554",
        "SOCKS 109.199.107.68:1080",
        "SOCKS 175.27.250.85:44117",
        "SOCKS 46.17.43.219:7890",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}