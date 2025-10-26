function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 117.74.65.207:80",
        "SOCKS 72.10.160.173:1157",
        "SOCKS 208.113.155.120:41154",
        "SOCKS 67.43.236.19:21023",
        "SOCKS 69.164.206.96:13024",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 72.10.160.91:2473",
        "SOCKS 114.9.62.250:1452",
        "SOCKS 138.201.139.252:12344",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 205.185.126.51:5556",
        "SOCKS 217.25.90.44:5050",
        "SOCKS 47.98.190.236:8002",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 157.230.1.108:14070",
        "SOCKS 221.134.152.75:7302",
        "SOCKS 68.183.90.210:59166",
        "SOCKS 45.70.236.121:8080",
        "SOCKS 222.59.173.105:45192",
        "SOCKS 222.129.32.173:57114",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}