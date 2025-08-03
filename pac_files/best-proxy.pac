function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 49.156.44.117:8080",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 157.15.66.105:8080",
        "SOCKS 196.204.83.232:1981",
        "SOCKS 222.129.32.188:57114",
        "SOCKS 47.250.159.65:8081",
        "SOCKS 40.192.77.121:3128",
        "SOCKS 184.178.172.28:15294",
        "SOCKS 113.167.179.6:8080",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 159.203.61.169:1080",
        "SOCKS 117.161.170.163:9002",
        "SOCKS 125.77.135.240:80",
        "SOCKS 61.29.96.146:8000",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 31.211.142.115:8192",
        "SOCKS 67.43.236.19:3527",
        "SOCKS 140.237.14.92:4216",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}