function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 88.99.10.252:1080",
        "SOCKS 94.184.25.28:242",
        "SOCKS 59.33.33.155:7890",
        "SOCKS 193.239.86.249:3128",
        "SOCKS 45.59.187.85:8080",
        "SOCKS 94.184.25.62:242",
        "SOCKS 102.213.216.98:8080",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 213.35.110.67:10819",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 62.60.131.197:4045",
        "SOCKS 18.141.177.23:80",
        "SOCKS 223.113.89.138:1080",
        "SOCKS 194.163.167.32:1080",
        "SOCKS 152.228.212.223:29272",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 139.59.225.188:12827",
        "SOCKS 104.37.175.200:22292",
        "SOCKS 47.88.104.126:3344",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}