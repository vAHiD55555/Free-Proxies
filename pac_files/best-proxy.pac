function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 91.151.88.220:6618",
        "SOCKS 194.58.42.234:1080",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 198.23.236.47:1111",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 104.248.146.99:3128",
        "SOCKS 193.190.127.142:3128",
        "SOCKS 84.17.51.241:3128",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 125.227.225.157:3389",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 82.200.235.134:38191",
        "SOCKS 43.240.83.70:8080",
        "SOCKS 36.255.98.151:6139",
        "SOCKS 62.60.131.185:6767",
        "SOCKS 51.57.117.206:3128",
        "SOCKS 85.214.244.174:3128",
        "SOCKS 36.255.98.184:12111",
        "SOCKS 37.120.222.132:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}