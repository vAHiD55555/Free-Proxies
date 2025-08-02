function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 212.113.112.84:1080",
        "SOCKS 103.187.86.54:8182",
        "SOCKS 212.110.188.189:34405",
        "SOCKS 186.207.148.71:8787",
        "SOCKS 24.249.199.4:4145",
        "SOCKS 27.79.182.118:16000",
        "SOCKS 67.43.228.250:7015",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 47.90.205.231:33333",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 98.190.102.40:4145",
        "SOCKS 58.186.211.121:16000",
        "SOCKS 174.75.211.222:4145",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 174.64.199.79:4145",
        "SOCKS 45.115.113.126:9090",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 192.241.243.131:9150",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 118.68.64.181:16000",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}