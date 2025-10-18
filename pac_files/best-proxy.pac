function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 117.161.170.163:9177",
        "SOCKS 171.249.163.170:1452",
        "SOCKS 222.129.36.115:57114",
        "SOCKS 37.200.67.75:1080",
        "SOCKS 80.253.246.238:6618",
        "SOCKS 117.161.170.163:9082",
        "SOCKS 185.93.89.144:11751",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 193.227.129.217:30335",
        "SOCKS 185.93.89.187:8128",
        "SOCKS 47.237.172.201:1011",
        "SOCKS 82.223.165.28:4733",
        "SOCKS 51.158.98.211:16379",
        "SOCKS 103.203.234.75:8080",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 124.115.21.11:1080",
        "SOCKS 158.69.185.37:3129",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 156.244.11.6:80",
        "SOCKS 172.99.189.39:15604",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}