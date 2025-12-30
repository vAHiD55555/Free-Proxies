function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.148.112.69:8199",
        "SOCKS 67.43.236.22:30177",
        "SOCKS 5.75.235.252:17199",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 103.109.96.86:21225",
        "SOCKS 89.108.83.137:1080",
        "SOCKS 115.127.178.66:2589",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 114.236.93.203:15800",
        "SOCKS 163.172.131.178:16379",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 115.127.83.142:1088",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 176.117.237.132:1080",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 205.185.123.62:2555",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}