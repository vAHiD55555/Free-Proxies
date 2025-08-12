function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 172.104.4.144:9050",
        "SOCKS 103.245.96.124:6969",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 128.199.202.122:1080",
        "SOCKS 20.27.15.111:8561",
        "SOCKS 138.68.60.8:1080",
        "SOCKS 20.27.11.248:8561",
        "SOCKS 208.113.155.120:41154",
        "SOCKS 147.75.34.105:443",
        "SOCKS 67.43.228.253:13271",
        "SOCKS 174.75.211.222:4145",
        "SOCKS 20.78.26.206:8561",
        "SOCKS 41.33.252.209:80",
        "SOCKS 27.79.232.227:16000",
        "SOCKS 115.221.245.167:1080",
        "SOCKS 51.15.226.238:16379",
        "SOCKS 27.79.149.233:16000",
        "SOCKS 222.129.36.157:57114",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 43.224.8.116:6667",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}