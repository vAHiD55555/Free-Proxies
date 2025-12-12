function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 101.91.242.198:6688",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 206.245.133.192:50000",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 128.140.76.145:20788",
        "SOCKS 52.87.167.25:80",
        "SOCKS 125.141.139.110:5566",
        "SOCKS 124.115.21.11:1080",
        "SOCKS 125.227.225.157:3389",
        "SOCKS 128.140.76.145:54849",
        "SOCKS 154.0.14.116:3128",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 34.234.201.164:80",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 115.127.83.142:1088",
        "SOCKS 103.109.57.42:3629",
        "SOCKS 91.151.88.220:6618",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}