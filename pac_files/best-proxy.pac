function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 222.129.32.173:57114",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 184.178.172.28:15294",
        "SOCKS 216.250.11.178:3128",
        "SOCKS 8.211.194.85:4002",
        "SOCKS 51.20.192.194:3128",
        "SOCKS 94.136.188.78:4326",
        "SOCKS 72.10.164.178:28247",
        "SOCKS 106.251.66.243:51900",
        "SOCKS 14.225.240.23:8562",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 171.228.176.205:4001",
        "SOCKS 183.96.222.70:18572",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 103.145.34.10:55443",
        "SOCKS 140.143.164.213:1080",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 67.43.236.20:6231",
        "SOCKS 47.74.226.8:5001",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}