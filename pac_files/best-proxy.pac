function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.177.92.226:1080",
        "SOCKS 45.74.31.42:4193",
        "SOCKS 193.23.200.64:3128",
        "SOCKS 121.35.254.227:19000",
        "SOCKS 5.45.119.70:1080",
        "SOCKS 5.140.110.96:1080",
        "SOCKS 174.138.162.35:20017",
        "SOCKS 185.100.196.188:8080",
        "SOCKS 8.221.138.111:9000",
        "SOCKS 69.87.216.54:7989",
        "SOCKS 176.126.70.111:16379",
        "SOCKS 45.74.31.30:32980",
        "SOCKS 212.237.125.216:6969",
        "SOCKS 43.252.238.252:69",
        "SOCKS 94.183.233.251:1080",
        "SOCKS 49.13.22.249:10808",
        "SOCKS 45.74.31.42:5197",
        "SOCKS 203.189.155.68:1080",
        "SOCKS 5.75.133.113:10811",
        "SOCKS 45.74.31.30:4028",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}