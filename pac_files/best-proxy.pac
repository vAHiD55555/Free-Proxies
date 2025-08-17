function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.136.198.40:3128",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 219.147.112.150:1080",
        "SOCKS 152.53.168.53:44887",
        "SOCKS 124.83.110.164:8082",
        "SOCKS 117.5.37.135:4001",
        "SOCKS 40.192.110.77:51773",
        "SOCKS 190.97.236.133:999",
        "SOCKS 190.97.230.105:999",
        "SOCKS 47.237.92.86:8080",
        "SOCKS 18.188.141.177:8834",
        "SOCKS 47.251.73.54:64",
        "SOCKS 222.59.173.105:44124",
        "SOCKS 42.193.101.38:1080",
        "SOCKS 153.127.195.58:4444",
        "SOCKS 47.245.117.43:80",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 8.209.249.89:3128",
        "SOCKS 43.224.10.43:6667",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}