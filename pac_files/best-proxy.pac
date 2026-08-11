function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 43.134.21.118:7890",
        "SOCKS 161.35.90.93:1081",
        "SOCKS 68.224.16.30:9100",
        "SOCKS 117.244.114.54:1080",
        "SOCKS 58.186.168.155:1088",
        "SOCKS 159.195.49.27:1080",
        "SOCKS 192.9.231.220:30001",
        "SOCKS 176.126.70.111:16379",
        "SOCKS 176.120.84.29:1080",
        "SOCKS 188.128.86.74:1080",
        "SOCKS 95.211.174.135:3128",
        "SOCKS 103.239.201.10:58765",
        "SOCKS 45.144.54.40:1080",
        "SOCKS 5.255.103.55:1080",
        "SOCKS 104.249.40.117:1080",
        "SOCKS 110.235.240.223:1080",
        "SOCKS 8.215.112.240:7777",
        "SOCKS 38.76.215.92:1080",
        "SOCKS 140.245.53.190:1088",
        "SOCKS 120.133.82.62:44054",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}