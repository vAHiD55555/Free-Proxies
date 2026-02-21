function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 218.4.192.62:7302",
        "SOCKS 217.73.117.62:1080",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 51.254.81.100:1080",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 183.164.254.8:4216",
        "SOCKS 137.184.228.194:40886",
        "SOCKS 193.34.95.110:8080",
        "SOCKS 156.225.31.27:7890",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 79.122.230.20:8080",
        "SOCKS 103.28.121.58:3128",
        "SOCKS 45.66.131.244:50161",
        "SOCKS 35.180.127.14:1001",
        "SOCKS 84.17.51.240:3128",
        "SOCKS 104.37.175.200:22292",
        "SOCKS 109.238.14.123:52663",
        "SOCKS 106.45.221.168:3256",
        "SOCKS 159.89.113.155:8080",
        "SOCKS 138.201.139.252:12344",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}