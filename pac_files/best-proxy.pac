function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 1.180.0.162:7302",
        "SOCKS 141.94.195.25:22563",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 163.172.161.35:16379",
        "SOCKS 67.43.236.20:3209",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 152.53.171.242:44567",
        "SOCKS 103.174.178.137:1020",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 67.43.228.252:9919",
        "SOCKS 204.93.169.232:60755",
        "SOCKS 102.209.56.21:80",
        "SOCKS 43.224.10.43:6667",
        "SOCKS 190.14.249.111:8080",
        "SOCKS 64.226.90.210:20201",
        "SOCKS 43.207.112.128:3128",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 205.185.114.78:5556",
        "SOCKS 125.141.133.98:5566",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}