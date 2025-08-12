function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.203.234.103:8080",
        "SOCKS 67.43.236.20:6231",
        "SOCKS 212.113.112.84:1080",
        "SOCKS 43.153.43.58:31280",
        "SOCKS 67.43.236.19:3527",
        "SOCKS 43.224.10.43:6667",
        "SOCKS 101.33.74.218:1111",
        "SOCKS 77.110.114.116:8080",
        "SOCKS 103.109.57.42:3629",
        "SOCKS 160.30.137.95:7005",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 130.193.56.133:3128",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 114.231.75.124:1080",
        "SOCKS 200.34.227.28:8080",
        "SOCKS 72.10.164.178:28247",
        "SOCKS 222.129.36.115:57114",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 218.6.105.152:4216",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}