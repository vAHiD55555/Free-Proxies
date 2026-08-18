function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 110.235.255.252:1080",
        "SOCKS 201.165.172.14:1080",
        "SOCKS 177.5.74.74:1080",
        "SOCKS 120.133.82.62:44152",
        "SOCKS 120.133.82.62:44051",
        "SOCKS 202.62.49.65:1080",
        "SOCKS 103.82.23.118:6182",
        "SOCKS 213.171.15.153:1080",
        "SOCKS 138.197.68.35:4857",
        "SOCKS 85.174.84.22:1080",
        "SOCKS 172.236.23.95:3128",
        "SOCKS 163.61.70.4:9000",
        "SOCKS 82.102.11.164:3460",
        "SOCKS 118.145.141.251:44108",
        "SOCKS 120.133.82.62:44098",
        "SOCKS 38.10.240.130:3128",
        "SOCKS 45.66.249.187:8080",
        "SOCKS 110.235.252.74:1080",
        "SOCKS 203.189.135.140:1080",
        "SOCKS 178.128.82.131:10808",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}