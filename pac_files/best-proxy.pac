function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 182.160.14.145:13080",
        "SOCKS 116.203.139.209:3128",
        "SOCKS 193.34.95.110:8080",
        "SOCKS 61.130.151.230:7302",
        "SOCKS 89.148.196.156:1080",
        "SOCKS 14.225.240.23:8562",
        "SOCKS 79.110.52.252:3128",
        "SOCKS 185.236.202.170:3128",
        "SOCKS 128.140.76.145:14423",
        "SOCKS 47.242.124.53:1011",
        "SOCKS 51.158.68.133:8811",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 125.87.82.86:3256",
        "SOCKS 51.15.240.207:16379",
        "SOCKS 213.35.126.34:10808",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 185.118.51.163:3128",
        "SOCKS 103.82.23.118:5178",
        "SOCKS 176.113.73.99:3128",
        "SOCKS 66.135.227.178:4145",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}