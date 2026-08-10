function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.8.88.236:1080",
        "SOCKS 103.239.201.49:58765",
        "SOCKS 178.156.206.253:8118",
        "SOCKS 47.237.92.86:9080",
        "SOCKS 193.124.64.142:1080",
        "SOCKS 31.56.39.133:8080",
        "SOCKS 91.246.1.6:4433",
        "SOCKS 101.36.104.46:10808",
        "SOCKS 65.109.217.76:2223",
        "SOCKS 123.58.219.171:10808",
        "SOCKS 185.245.183.130:8118",
        "SOCKS 47.238.236.151:5555",
        "SOCKS 77.81.230.90:9050",
        "SOCKS 216.106.179.216:49444",
        "SOCKS 43.153.62.53:47783",
        "SOCKS 199.168.131.234:1080",
        "SOCKS 213.199.47.140:1080",
        "SOCKS 43.156.201.214:2080",
        "SOCKS 5.230.201.154:1080",
        "SOCKS 34.94.46.8:80",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}