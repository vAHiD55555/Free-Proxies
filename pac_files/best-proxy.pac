function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 36.95.61.186:8080",
        "SOCKS 152.53.36.101:25331",
        "SOCKS 134.122.21.142:33346",
        "SOCKS 171.238.88.27:1054",
        "SOCKS 152.53.36.101:30343",
        "SOCKS 103.188.169.160:7777",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 152.53.36.101:37666",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 205.185.126.51:5556",
        "SOCKS 67.205.153.110:51528",
        "SOCKS 157.180.121.252:15857",
        "SOCKS 114.9.25.74:8080",
        "SOCKS 222.129.36.92:57114",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 157.180.121.252:17655",
        "SOCKS 183.80.40.51:1081",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 51.158.105.107:16379",
        "SOCKS 152.53.36.101:54269",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}