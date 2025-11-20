function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 152.53.36.101:18081",
        "SOCKS 152.231.29.135:999",
        "SOCKS 51.195.139.95:44648",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 65.108.159.129:8081",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 114.236.93.203:15800",
        "SOCKS 103.109.57.42:3629",
        "SOCKS 109.135.16.145:8789",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 125.141.139.110:5566",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 222.129.36.92:57114",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 177.93.39.73:999",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 141.94.70.195:46797",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}