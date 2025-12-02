function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 178.49.22.23:1080",
        "SOCKS 138.199.25.13:3901",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 109.238.14.123:52663",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 43.247.13.234:5678",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 72.10.160.170:13701",
        "SOCKS 67.43.236.19:6787",
        "SOCKS 43.153.64.222:19919",
        "SOCKS 204.93.169.232:60755",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 138.199.25.13:3907",
        "SOCKS 43.153.64.222:18302",
        "SOCKS 140.238.22.48:8008",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 43.153.64.222:11571",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}