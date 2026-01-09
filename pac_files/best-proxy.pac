function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 185.236.202.205:3128",
        "SOCKS 72.10.160.170:28941",
        "SOCKS 176.119.16.40:8534",
        "SOCKS 84.17.51.241:3128",
        "SOCKS 221.134.152.75:7302",
        "SOCKS 193.233.254.9:1080",
        "SOCKS 138.124.81.12:8888",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 104.248.158.27:25100",
        "SOCKS 79.122.230.20:8080",
        "SOCKS 121.206.205.75:4216",
        "SOCKS 125.141.139.112:5566",
        "SOCKS 194.163.182.6:1080",
        "SOCKS 40.192.14.136:9292",
        "SOCKS 207.244.240.181:8888",
        "SOCKS 176.113.73.99:3128",
        "SOCKS 210.16.160.222:7890",
        "SOCKS 88.99.10.252:1080",
        "SOCKS 115.127.62.50:1088",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}