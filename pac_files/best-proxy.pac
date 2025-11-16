function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 202.5.33.229:9108",
        "SOCKS 89.58.45.94:20589",
        "SOCKS 135.181.203.208:80",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 43.224.10.43:6667",
        "SOCKS 8.210.179.15:1100",
        "SOCKS 138.201.139.252:12344",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 210.87.125.58:1080",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 203.25.208.163:1011",
        "SOCKS 167.172.138.48:49167",
        "SOCKS 190.97.254.180:8080",
        "SOCKS 194.29.60.220:8080",
        "SOCKS 185.203.238.120:3128",
        "SOCKS 137.184.228.194:40886",
        "SOCKS 134.209.29.120:1080",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 125.141.139.110:5566",
        "SOCKS 51.15.240.207:16379",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}