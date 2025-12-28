function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 8.142.3.145:3306",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 43.157.34.94:1777",
        "SOCKS 103.189.218.83:6969",
        "SOCKS 47.239.238.156:1100",
        "SOCKS 222.129.36.157:57114",
        "SOCKS 115.127.178.62:2589",
        "SOCKS 43.131.9.114:1777",
        "SOCKS 47.236.20.209:1145",
        "SOCKS 123.182.233.70:7302",
        "SOCKS 124.197.21.223:3128",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 174.138.62.182:43715",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 183.80.54.224:1080",
        "SOCKS 103.242.175.241:8899",
        "SOCKS 104.37.175.200:22292",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}