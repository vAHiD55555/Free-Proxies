function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 120.77.203.0:443",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 185.112.224.151:1080",
        "SOCKS 152.53.171.242:26447",
        "SOCKS 104.248.203.234:1080",
        "SOCKS 152.53.36.101:45775",
        "SOCKS 198.199.86.11:1080",
        "SOCKS 103.216.253.50:20000",
        "SOCKS 180.94.134.197:8080",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 67.43.228.254:30831",
        "SOCKS 205.185.126.51:5556",
        "SOCKS 114.96.218.231:3000",
        "SOCKS 152.53.36.101:21993",
        "SOCKS 152.53.171.242:57981",
        "SOCKS 43.224.10.43:6667",
        "SOCKS 152.53.36.101:18749",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 152.53.36.101:13175",
        "SOCKS 61.130.151.230:7302",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}