function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 150.227.4.147:1080",
        "SOCKS 185.200.37.43:8080",
        "SOCKS 113.195.224.222:9999",
        "SOCKS 103.163.244.106:1080",
        "SOCKS 161.202.226.194:8123",
        "SOCKS 176.113.73.99:3128",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 88.99.10.252:1080",
        "SOCKS 8.213.128.6:84",
        "SOCKS 36.7.252.165:3256",
        "SOCKS 168.253.92.93:10808",
        "SOCKS 90.156.194.70:8026",
        "SOCKS 198.199.86.11:1080",
        "SOCKS 78.135.105.217:50504",
        "SOCKS 104.248.158.27:25100",
        "SOCKS 159.8.114.37:8123",
        "SOCKS 104.248.59.38:80",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 202.154.241.199:808",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}