function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 82.145.209.242:80",
        "SOCKS 213.111.146.81:8888",
        "SOCKS 206.123.156.254:4366",
        "SOCKS 103.28.121.58:3128",
        "SOCKS 134.122.21.142:33346",
        "SOCKS 213.35.110.67:10881",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 223.113.89.138:1080",
        "SOCKS 112.98.218.73:57658",
        "SOCKS 167.172.109.12:39452",
        "SOCKS 58.19.55.17:15168",
        "SOCKS 103.174.178.137:1020",
        "SOCKS 173.249.5.133:1080",
        "SOCKS 77.246.111.238:1080",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 103.236.64.247:8888",
        "SOCKS 205.185.114.78:5556",
        "SOCKS 194.233.68.54:1088",
        "SOCKS 84.17.51.235:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}