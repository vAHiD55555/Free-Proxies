function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 69.164.206.96:13024",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 79.110.52.252:3128",
        "SOCKS 176.113.73.102:3128",
        "SOCKS 200.116.198.222:9812",
        "SOCKS 46.21.153.16:3128",
        "SOCKS 157.230.1.108:14070",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 193.239.86.247:3128",
        "SOCKS 37.120.222.132:3128",
        "SOCKS 103.114.53.2:8080",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 112.98.218.73:57658",
        "SOCKS 95.111.226.235:3128",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 203.189.151.19:1080",
        "SOCKS 85.214.244.174:3128",
        "SOCKS 104.248.59.38:80",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}