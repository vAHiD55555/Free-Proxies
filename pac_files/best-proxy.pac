function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 138.199.25.13:3909",
        "SOCKS 62.60.131.194:5117",
        "SOCKS 51.195.139.95:44648",
        "SOCKS 43.133.7.72:6006",
        "SOCKS 51.158.98.211:16379",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 204.93.169.232:60755",
        "SOCKS 221.134.152.75:7302",
        "SOCKS 51.15.133.214:16379",
        "SOCKS 43.133.21.94:6006",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 123.182.233.70:7302",
        "SOCKS 43.133.15.125:6006",
        "SOCKS 107.173.111.110:7890",
        "SOCKS 61.160.66.130:5555",
        "SOCKS 62.60.131.188:8547",
        "SOCKS 103.191.218.119:8199",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 68.183.90.210:59166",
        "SOCKS 121.205.213.141:4216",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}