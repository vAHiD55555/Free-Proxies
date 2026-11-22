function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 42.114.62.148:20001",
        "SOCKS 158.94.173.13:1080",
        "SOCKS 45.74.31.42:4157",
        "SOCKS 178.206.121.205:1080",
        "SOCKS 27.74.14.67:5000",
        "SOCKS 46.246.98.80:1080",
        "SOCKS 203.76.123.6:1080",
        "SOCKS 154.201.94.205:1080",
        "SOCKS 5.42.123.150:1080",
        "SOCKS 5.175.136.21:1080",
        "SOCKS 45.74.31.47:4307",
        "SOCKS 202.4.115.232:9090",
        "SOCKS 203.189.137.53:1080",
        "SOCKS 172.86.88.139:1080",
        "SOCKS 172.86.84.97:1086",
        "SOCKS 45.67.84.116:9080",
        "SOCKS 77.83.37.241:1080",
        "SOCKS 132.145.80.92:1080",
        "SOCKS 145.220.227.132:1080",
        "SOCKS 202.4.101.249:9090",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}