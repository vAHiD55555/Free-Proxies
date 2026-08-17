function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 72.195.34.42:4145",
        "SOCKS 2.144.6.22:9090",
        "SOCKS 173.208.243.148:9050",
        "SOCKS 160.250.54.8:9000",
        "SOCKS 78.85.139.146:1080",
        "SOCKS 8.211.170.91:14680",
        "SOCKS 84.8.248.36:3128",
        "SOCKS 144.124.232.204:443",
        "SOCKS 107.191.44.214:1081",
        "SOCKS 103.145.133.84:1080",
        "SOCKS 163.5.214.119:9097",
        "SOCKS 103.76.149.140:1080",
        "SOCKS 185.185.80.58:1088",
        "SOCKS 161.97.119.1:8888",
        "SOCKS 43.153.71.188:9050",
        "SOCKS 45.130.201.172:1080",
        "SOCKS 202.62.49.65:1080",
        "SOCKS 14.139.235.82:3128",
        "SOCKS 47.238.185.110:9999",
        "SOCKS 156.245.246.51:7890",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}