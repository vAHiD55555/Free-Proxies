function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 124.115.21.11:1080",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 167.172.159.43:39019",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 212.2.248.245:3128",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 185.118.51.230:3128",
        "SOCKS 202.62.59.138:1080",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 162.144.74.156:3620",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 202.62.59.216:1080",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 54.215.46.91:20087",
        "SOCKS 72.10.160.91:4323",
        "SOCKS 103.118.85.144:1080",
        "SOCKS 178.132.5.24:21200",
        "SOCKS 193.233.254.8:1080",
        "SOCKS 103.171.83.25:10810",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}