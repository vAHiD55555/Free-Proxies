function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 125.141.133.98:5566",
        "SOCKS 109.238.14.123:52663",
        "SOCKS 45.115.113.126:9090",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 143.110.217.153:1080",
        "SOCKS 20.27.15.49:8561",
        "SOCKS 8.219.114.109:1100",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 152.53.36.101:39873",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 218.64.122.99:7302",
        "SOCKS 186.235.123.3:8080",
        "SOCKS 125.227.225.157:3389",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 125.141.139.198:5566",
        "SOCKS 134.122.21.142:33346",
        "SOCKS 78.157.57.71:3128",
        "SOCKS 52.188.28.218:3128",
        "SOCKS 175.24.2.65:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}