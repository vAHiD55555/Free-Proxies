function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 117.161.170.163:9106",
        "SOCKS 47.237.92.86:4916",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 103.118.175.107:8080",
        "SOCKS 222.129.32.188:57114",
        "SOCKS 35.183.64.191:30309",
        "SOCKS 154.38.180.176:443",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 104.248.158.27:25100",
        "SOCKS 43.157.34.94:1777",
        "SOCKS 198.54.124.88:8080",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 51.15.240.207:16379",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 103.76.149.140:1080",
        "SOCKS 117.161.170.163:9028",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 218.6.105.152:4216",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}