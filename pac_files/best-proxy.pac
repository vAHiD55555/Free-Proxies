function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 164.90.215.49:3128",
        "SOCKS 51.158.68.133:8811",
        "SOCKS 125.227.225.157:3389",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 47.74.226.8:5001",
        "SOCKS 61.49.87.3:80",
        "SOCKS 46.21.153.16:3128",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 8.212.178.171:80",
        "SOCKS 137.184.228.194:40886",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 69.164.206.96:13024",
        "SOCKS 12.156.45.155:3128",
        "SOCKS 37.120.222.132:3128",
        "SOCKS 120.77.203.0:443",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 113.121.240.114:3256",
        "SOCKS 193.34.95.110:8080",
        "SOCKS 85.214.244.174:3128",
        "SOCKS 78.187.42.187:3310",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}