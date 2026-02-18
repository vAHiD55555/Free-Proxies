function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 221.134.152.75:7302",
        "SOCKS 173.212.237.43:43648",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 104.248.158.27:25100",
        "SOCKS 89.249.65.191:3128",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 159.8.114.37:8123",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 185.189.112.157:3128",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 167.172.109.12:41491",
        "SOCKS 84.17.51.241:3128",
        "SOCKS 125.227.225.157:3389",
        "SOCKS 3.24.178.81:80",
        "SOCKS 80.253.246.238:6618",
        "SOCKS 205.185.126.51:5556",
        "SOCKS 200.174.198.32:8888",
        "SOCKS 103.174.178.133:1020",
        "SOCKS 123.54.197.50:22530",
        "SOCKS 46.21.153.16:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}