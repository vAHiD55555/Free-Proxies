function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 185.93.89.183:7789",
        "SOCKS 103.160.12.147:8199",
        "SOCKS 205.185.126.51:5556",
        "SOCKS 152.53.36.101:20447",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 8.211.49.86:8008",
        "SOCKS 185.93.89.180:4415",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 13.59.113.45:31280",
        "SOCKS 51.15.240.207:16379",
        "SOCKS 178.49.236.109:1080",
        "SOCKS 61.160.66.130:5555",
        "SOCKS 157.230.220.25:4857",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 67.43.228.252:30497",
        "SOCKS 14.234.141.1:20499",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 51.15.196.107:16379",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}