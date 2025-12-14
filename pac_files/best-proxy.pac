function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 123.56.89.191:1081",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 51.158.64.130:16379",
        "SOCKS 34.48.171.130:33080",
        "SOCKS 195.211.71.185:443",
        "SOCKS 91.184.253.97:8888",
        "SOCKS 204.93.169.232:60755",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 137.184.228.194:40886",
        "SOCKS 43.225.185.4:8000",
        "SOCKS 176.74.197.163:36918",
        "SOCKS 82.115.24.134:9090",
        "SOCKS 45.204.208.22:60002",
        "SOCKS 43.224.10.43:6667",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 184.185.2.45:4145",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}