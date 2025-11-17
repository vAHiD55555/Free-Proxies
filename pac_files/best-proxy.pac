function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 89.58.45.94:17612",
        "SOCKS 104.248.158.27:25100",
        "SOCKS 103.228.246.199:1111",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 186.96.111.214:999",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 135.181.203.208:80",
        "SOCKS 60.249.94.59:3128",
        "SOCKS 104.37.175.200:22292",
        "SOCKS 45.189.252.240:999",
        "SOCKS 104.219.236.127:1080",
        "SOCKS 37.46.16.76:1080",
        "SOCKS 72.10.160.93:7741",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 125.141.139.110:5566",
        "SOCKS 109.238.14.123:52663",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 185.244.208.195:23699",
        "SOCKS 51.158.64.130:16379",
        "SOCKS 89.58.45.94:43283",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}