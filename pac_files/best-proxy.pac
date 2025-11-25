function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 125.141.133.49:5566",
        "SOCKS 176.74.192.44:24822",
        "SOCKS 118.145.198.145:10809",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 104.37.175.200:22292",
        "SOCKS 47.237.68.206:1011",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 8.222.195.4:1024",
        "SOCKS 172.235.28.32:3128",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 144.124.227.90:10808",
        "SOCKS 72.10.160.92:11383",
        "SOCKS 103.174.178.131:1020",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 125.227.225.157:3389",
        "SOCKS 144.126.236.218:8888",
        "SOCKS 72.10.160.174:8717",
        "SOCKS 34.48.171.130:33080",
        "SOCKS 171.238.88.218:1081",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}