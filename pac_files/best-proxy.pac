function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 91.151.88.220:6618",
        "SOCKS 185.123.143.247:3128",
        "SOCKS 183.249.5.110:22222",
        "SOCKS 51.158.172.165:8811",
        "SOCKS 188.130.160.209:80",
        "SOCKS 59.46.216.131:30001",
        "SOCKS 84.17.51.235:3128",
        "SOCKS 178.128.212.127:8888",
        "SOCKS 138.201.139.252:12344",
        "SOCKS 31.211.142.115:8192",
        "SOCKS 88.99.10.252:1080",
        "SOCKS 85.133.227.150:80",
        "SOCKS 194.163.167.32:1080",
        "SOCKS 185.194.217.97:1080",
        "SOCKS 103.28.121.58:80",
        "SOCKS 104.248.146.99:3128",
        "SOCKS 103.210.35.182:8080",
        "SOCKS 47.243.94.125:1080",
        "SOCKS 5.255.117.127:1080",
        "SOCKS 176.113.73.99:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}