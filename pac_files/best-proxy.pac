function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 43.224.10.43:6667",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 80.253.246.238:6618",
        "SOCKS 20.210.39.153:8561",
        "SOCKS 142.171.12.112:8118",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 62.60.131.203:4441",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 165.227.174.249:33080",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 125.141.139.198:5566",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 47.76.189.189:8899",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 20.78.26.206:8561",
        "SOCKS 47.250.155.254:8004",
        "SOCKS 157.230.1.108:14070",
        "SOCKS 138.201.139.252:12344",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}