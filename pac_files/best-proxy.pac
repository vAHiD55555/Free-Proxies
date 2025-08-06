function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 219.147.112.150:1080",
        "SOCKS 212.110.188.211:34409",
        "SOCKS 47.236.232.181:1111",
        "SOCKS 27.79.183.77:16000",
        "SOCKS 191.7.215.165:1452",
        "SOCKS 116.98.181.134:1007",
        "SOCKS 61.49.87.3:80",
        "SOCKS 43.224.10.43:6667",
        "SOCKS 61.29.96.146:8000",
        "SOCKS 103.112.53.211:6314",
        "SOCKS 98.190.102.40:4145",
        "SOCKS 24.249.199.4:4145",
        "SOCKS 31.14.114.68:1081",
        "SOCKS 89.110.65.39:9999",
        "SOCKS 67.43.236.21:5423",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 114.80.37.199:3081",
        "SOCKS 174.75.211.222:4145",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 98.162.96.41:4145",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}