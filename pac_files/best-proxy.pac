function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 95.188.64.220:1080",
        "SOCKS 112.98.218.73:57658",
        "SOCKS 47.76.189.189:8899",
        "SOCKS 88.99.10.252:1080",
        "SOCKS 116.242.89.230:3128",
        "SOCKS 5.199.166.232:9090",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 139.59.225.188:12827",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 203.189.156.11:1080",
        "SOCKS 178.170.43.129:8081",
        "SOCKS 159.8.114.37:80",
        "SOCKS 72.10.160.173:13349",
        "SOCKS 119.81.71.27:8123",
        "SOCKS 167.172.109.12:40825",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 134.17.6.31:3128",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 181.119.84.212:8080",
        "SOCKS 103.179.218.7:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}