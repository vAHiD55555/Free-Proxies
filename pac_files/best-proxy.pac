function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 102.209.56.21:80",
        "SOCKS 176.9.164.117:60018",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 72.240.9.63:80",
        "SOCKS 198.199.86.11:1080",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 65.108.203.35:28080",
        "SOCKS 20.78.26.206:8561",
        "SOCKS 113.160.132.195:8080",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 212.110.188.204:34411",
        "SOCKS 114.80.36.171:3081",
        "SOCKS 188.120.245.247:12432",
        "SOCKS 219.147.112.150:1080",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 144.76.159.121:8080",
        "SOCKS 67.43.236.19:3527",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 222.129.32.173:57114",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}