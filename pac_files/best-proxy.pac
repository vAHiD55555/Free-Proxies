function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 54.184.124.175:5010",
        "SOCKS 77.73.14.147:1080",
        "SOCKS 91.197.79.59:1080",
        "SOCKS 47.243.197.73:9050",
        "SOCKS 212.46.208.183:1080",
        "SOCKS 51.250.16.247:1080",
        "SOCKS 193.176.244.151:4885",
        "SOCKS 77.73.68.222:65000",
        "SOCKS 144.91.82.219:9050",
        "SOCKS 151.145.63.243:1080",
        "SOCKS 47.238.236.151:5555",
        "SOCKS 103.39.49.101:1082",
        "SOCKS 176.12.65.24:443",
        "SOCKS 46.30.41.59:9964",
        "SOCKS 46.146.220.247:1080",
        "SOCKS 47.82.80.127:1011",
        "SOCKS 5.189.17.23:9050",
        "SOCKS 165.22.240.206:1080",
        "SOCKS 195.135.255.98:1080",
        "SOCKS 217.118.188.122:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}