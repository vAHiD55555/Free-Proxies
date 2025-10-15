function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 64.227.131.240:1080",
        "SOCKS 160.25.8.67:11011",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 67.43.236.20:3209",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 125.141.139.112:5566",
        "SOCKS 222.129.36.115:57114",
        "SOCKS 104.37.175.200:22292",
        "SOCKS 82.223.165.28:62284",
        "SOCKS 143.198.147.156:8888",
        "SOCKS 67.43.236.21:8561",
        "SOCKS 139.162.78.109:1080",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 103.56.92.67:1935",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 185.93.89.143:10060",
        "SOCKS 176.119.36.76:1081",
        "SOCKS 194.233.76.162:8000",
        "SOCKS 203.25.208.163:1011",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}