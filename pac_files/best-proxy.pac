function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 185.93.89.164:4134",
        "SOCKS 115.221.245.167:1080",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 185.93.89.188:21025",
        "SOCKS 5.172.24.68:1080",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 178.128.167.129:1080",
        "SOCKS 114.80.32.8:3081",
        "SOCKS 113.46.197.22:8989",
        "SOCKS 185.93.89.143:8802",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 222.129.32.188:57114",
        "SOCKS 185.244.208.195:23699",
        "SOCKS 173.212.237.43:43648",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 211.143.79.108:3128",
        "SOCKS 204.93.169.232:60755",
        "SOCKS 138.124.49.149:10808",
        "SOCKS 67.43.228.252:4419",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}