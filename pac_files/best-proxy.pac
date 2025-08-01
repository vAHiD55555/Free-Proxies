function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 113.22.250.100:16000",
        "SOCKS 27.71.136.68:16000",
        "SOCKS 47.236.37.129:18081",
        "SOCKS 27.79.179.253:16000",
        "SOCKS 98.162.96.41:4145",
        "SOCKS 91.214.62.121:8053",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 1.54.54.6:16000",
        "SOCKS 72.10.160.170:3949",
        "SOCKS 72.10.160.174:21931",
        "SOCKS 222.129.32.173:57114",
        "SOCKS 89.58.45.94:43476",
        "SOCKS 98.190.102.62:4145",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 117.161.170.163:9408",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 165.227.174.249:33080",
        "SOCKS 67.43.228.254:6535",
        "SOCKS 174.75.211.222:4145",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}