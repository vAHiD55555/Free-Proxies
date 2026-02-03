function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 163.172.161.35:16379",
        "SOCKS 36.255.98.168:4217",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 202.72.232.121:1080",
        "SOCKS 89.249.65.191:3128",
        "SOCKS 137.184.228.194:40886",
        "SOCKS 188.191.164.55:4890",
        "SOCKS 14.248.84.131:8080",
        "SOCKS 43.250.9.46:10088",
        "SOCKS 159.8.114.37:80",
        "SOCKS 103.174.178.133:1020",
        "SOCKS 45.119.113.81:83",
        "SOCKS 109.238.14.123:52663",
        "SOCKS 185.123.143.251:3128",
        "SOCKS 125.227.225.157:3389",
        "SOCKS 167.249.29.218:999",
        "SOCKS 88.99.10.252:1080",
        "SOCKS 37.187.92.9:1030",
        "SOCKS 77.37.244.119:8080",
        "SOCKS 185.231.204.221:6115",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}