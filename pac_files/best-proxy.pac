function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 47.254.36.213:5000",
        "SOCKS 144.24.47.42:1080",
        "SOCKS 185.225.40.122:1080",
        "SOCKS 216.106.179.216:49163",
        "SOCKS 216.22.13.244:1083",
        "SOCKS 47.254.36.213:199",
        "SOCKS 31.76.80.215:1080",
        "SOCKS 220.158.232.118:1080",
        "SOCKS 216.22.13.244:1084",
        "SOCKS 64.111.92.171:10101",
        "SOCKS 109.199.107.68:1080",
        "SOCKS 103.106.190.58:1080",
        "SOCKS 103.186.193.135:8080",
        "SOCKS 203.189.150.44:1080",
        "SOCKS 51.83.226.103:9055",
        "SOCKS 46.183.130.89:1080",
        "SOCKS 51.250.16.247:1080",
        "SOCKS 47.83.134.196:1011",
        "SOCKS 78.109.137.53:1080",
        "SOCKS 117.236.124.166:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}