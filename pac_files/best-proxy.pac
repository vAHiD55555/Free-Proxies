function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 171.238.88.218:1040",
        "SOCKS 103.245.96.124:6969",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 24.37.120.42:1080",
        "SOCKS 104.250.52.139:2080",
        "SOCKS 47.243.80.108:1011",
        "SOCKS 112.198.132.199:8082",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 43.153.64.222:10307",
        "SOCKS 222.71.131.131:1080",
        "SOCKS 117.74.65.207:443",
        "SOCKS 171.238.88.27:1081",
        "SOCKS 47.74.46.81:50",
        "SOCKS 23.94.63.140:21080",
        "SOCKS 103.191.218.37:8199",
        "SOCKS 15.204.246.51:3128",
        "SOCKS 218.64.122.99:7302",
        "SOCKS 35.183.64.191:29715",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 157.180.121.252:40842",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}