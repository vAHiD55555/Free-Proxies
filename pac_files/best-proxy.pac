function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 35.152.252.253:8080",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 180.149.234.74:6214",
        "SOCKS 203.25.208.163:1111",
        "SOCKS 125.141.139.198:5566",
        "SOCKS 67.43.236.20:1691",
        "SOCKS 72.10.160.170:13701",
        "SOCKS 104.248.158.27:25100",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 213.35.126.34:10808",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 203.25.208.163:1011",
        "SOCKS 174.138.61.184:1080",
        "SOCKS 51.158.64.130:16379",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 163.172.161.35:16379",
        "SOCKS 68.183.90.210:59166",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}