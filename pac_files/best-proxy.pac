function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 222.129.33.141:57114",
        "SOCKS 101.91.242.198:6688",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 115.127.106.226:1088",
        "SOCKS 208.113.155.120:41154",
        "SOCKS 222.71.131.131:1080",
        "SOCKS 213.35.126.34:10808",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 222.129.32.173:57114",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 157.180.52.134:60001",
        "SOCKS 194.87.77.22:80",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 203.189.137.122:1080",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 128.140.76.145:10773",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}