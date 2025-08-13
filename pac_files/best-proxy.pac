function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 98.126.23.24:2846",
        "SOCKS 116.203.139.209:5678",
        "SOCKS 207.244.254.27:7000",
        "SOCKS 18.135.100.214:3128",
        "SOCKS 188.227.224.110:9051",
        "SOCKS 222.129.32.188:57114",
        "SOCKS 67.43.228.252:21045",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 208.113.155.120:41154",
        "SOCKS 110.49.34.126:32650",
        "SOCKS 209.97.150.167:1080",
        "SOCKS 222.129.36.157:57114",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 72.10.160.170:3949",
        "SOCKS 34.92.88.81:33333",
        "SOCKS 67.43.228.251:28401",
        "SOCKS 72.10.160.90:3581",
        "SOCKS 174.64.199.79:4145",
        "SOCKS 67.43.236.20:6231",
        "SOCKS 37.200.66.166:9051",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}