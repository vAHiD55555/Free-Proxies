function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 179.57.215.99:999",
        "SOCKS 213.154.2.210:3128",
        "SOCKS 205.185.120.241:5556",
        "SOCKS 51.158.98.211:16379",
        "SOCKS 35.180.188.216:80",
        "SOCKS 119.81.189.194:8123",
        "SOCKS 167.172.109.12:41491",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 194.163.182.6:1080",
        "SOCKS 180.183.97.16:8080",
        "SOCKS 51.158.68.68:8811",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 124.248.191.83:1080",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 185.118.51.133:3128",
        "SOCKS 103.197.241.210:1080",
        "SOCKS 204.93.169.232:60755",
        "SOCKS 115.127.182.126:2589",
        "SOCKS 125.227.225.157:3389",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}