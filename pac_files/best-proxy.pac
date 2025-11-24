function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 140.237.14.92:4216",
        "SOCKS 167.88.43.46:1080",
        "SOCKS 157.180.121.252:10811",
        "SOCKS 163.172.161.35:16379",
        "SOCKS 157.180.121.252:13855",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 89.169.36.109:1080",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 37.59.110.73:80",
        "SOCKS 209.97.149.157:80",
        "SOCKS 173.236.187.104:40355",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 157.230.1.108:14070",
        "SOCKS 103.82.23.118:6188",
        "SOCKS 104.37.175.200:22292",
        "SOCKS 103.174.178.137:1020",
        "SOCKS 176.74.192.44:24822",
        "SOCKS 157.180.121.252:28572",
        "SOCKS 172.104.240.74:9053",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}