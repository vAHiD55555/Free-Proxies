function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 203.189.156.249:1080",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 103.138.123.242:8082",
        "SOCKS 47.236.20.209:1145",
        "SOCKS 161.35.31.237:1080",
        "SOCKS 158.160.81.185:1080",
        "SOCKS 205.185.120.241:5556",
        "SOCKS 180.173.154.38:7897",
        "SOCKS 120.77.203.0:443",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 40.192.14.136:9292",
        "SOCKS 222.129.36.115:57114",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 129.213.162.27:17777",
        "SOCKS 157.66.16.36:5568",
        "SOCKS 157.180.121.252:29202",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 209.97.150.167:1080",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 185.61.38.140:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}