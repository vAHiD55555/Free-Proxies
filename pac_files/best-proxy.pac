function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 125.66.165.154:7302",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 103.82.23.118:5178",
        "SOCKS 36.147.78.166:80",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 152.53.36.101:30795",
        "SOCKS 135.125.97.184:38833",
        "SOCKS 167.71.220.29:7497",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 152.53.36.101:20935",
        "SOCKS 171.238.88.218:1057",
        "SOCKS 109.196.140.199:1080",
        "SOCKS 8.217.147.173:8080",
        "SOCKS 152.53.36.101:25667",
        "SOCKS 104.37.175.200:22292",
        "SOCKS 152.53.36.101:17045",
        "SOCKS 72.10.160.94:8911",
        "SOCKS 125.141.139.110:5566",
        "SOCKS 5.10.230.93:8080",
        "SOCKS 138.201.139.252:12344",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}