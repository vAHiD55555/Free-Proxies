function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 13.140.164.179:3538",
        "SOCKS 43.156.201.214:2080",
        "SOCKS 216.106.179.216:49172",
        "SOCKS 37.204.230.182:1080",
        "SOCKS 34.84.162.206:38081",
        "SOCKS 140.82.16.82:1080",
        "SOCKS 123.58.219.171:10808",
        "SOCKS 13.140.164.179:3616",
        "SOCKS 88.247.177.8:3310",
        "SOCKS 77.110.114.114:1080",
        "SOCKS 212.113.99.167:10800",
        "SOCKS 147.45.221.111:1082",
        "SOCKS 103.119.60.219:1080",
        "SOCKS 182.163.96.66:1080",
        "SOCKS 103.36.11.18:8199",
        "SOCKS 202.62.50.222:1080",
        "SOCKS 118.70.151.55:1080",
        "SOCKS 87.107.68.231:1081",
        "SOCKS 157.66.26.151:1080",
        "SOCKS 13.140.164.179:3547",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}