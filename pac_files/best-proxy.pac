function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 119.148.7.10:22122",
        "SOCKS 34.101.184.164:3128",
        "SOCKS 8.212.168.170:8085",
        "SOCKS 185.103.109.59:9050",
        "SOCKS 47.90.167.27:800",
        "SOCKS 185.205.210.154:1084",
        "SOCKS 194.163.174.78:1082",
        "SOCKS 144.21.39.252:1080",
        "SOCKS 124.248.191.117:1080",
        "SOCKS 103.75.118.84:1080",
        "SOCKS 118.194.228.2:10808",
        "SOCKS 202.62.49.65:1080",
        "SOCKS 70.166.65.160:4145",
        "SOCKS 47.91.120.190:9091",
        "SOCKS 176.192.41.172:4444",
        "SOCKS 72.195.34.58:4145",
        "SOCKS 85.234.100.149:1080",
        "SOCKS 5.249.165.195:20000",
        "SOCKS 157.66.26.151:1080",
        "SOCKS 159.223.52.199:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}