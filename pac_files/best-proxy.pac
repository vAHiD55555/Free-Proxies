function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 135.125.97.184:38833",
        "SOCKS 43.247.13.234:5678",
        "SOCKS 128.140.113.110:3128",
        "SOCKS 177.53.153.90:999",
        "SOCKS 101.91.242.198:6688",
        "SOCKS 45.236.215.111:54029",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 104.248.158.27:25100",
        "SOCKS 157.180.121.252:25099",
        "SOCKS 120.77.203.0:443",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 67.43.236.20:3209",
        "SOCKS 103.109.56.77:1080",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 98.185.94.76:4145",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}