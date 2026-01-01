function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 179.96.28.58:80",
        "SOCKS 103.103.146.149:7080",
        "SOCKS 125.141.139.112:5566",
        "SOCKS 110.235.240.223:1080",
        "SOCKS 45.144.234.129:54972",
        "SOCKS 47.79.40.185:12462",
        "SOCKS 113.192.12.102:8080",
        "SOCKS 125.141.139.110:5566",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 103.174.178.137:1020",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 20.2.144.174:9998",
        "SOCKS 103.166.158.27:8181",
        "SOCKS 67.43.236.18:18447",
        "SOCKS 183.98.143.134:8055",
        "SOCKS 62.133.62.12:1082",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 36.255.98.175:8382",
        "SOCKS 222.129.32.173:57114",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}