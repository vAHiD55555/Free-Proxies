function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 67.43.236.18:3927",
        "SOCKS 72.10.160.174:21931",
        "SOCKS 65.108.251.40:11107",
        "SOCKS 222.129.32.188:57114",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 117.74.65.207:443",
        "SOCKS 69.64.48.129:25582",
        "SOCKS 43.159.54.102:8888",
        "SOCKS 202.137.14.57:8085",
        "SOCKS 222.129.36.115:57114",
        "SOCKS 198.199.86.11:1080",
        "SOCKS 128.199.202.122:1080",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 222.129.32.173:57114",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 140.143.164.213:1080",
        "SOCKS 176.9.164.117:60013",
        "SOCKS 34.166.117.165:1080",
        "SOCKS 115.72.4.69:10001",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}