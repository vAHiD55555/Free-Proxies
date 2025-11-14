function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 46.10.208.106:8192",
        "SOCKS 89.58.45.94:59153",
        "SOCKS 91.206.14.55:1080",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 31.129.147.102:1080",
        "SOCKS 154.117.154.194:8080",
        "SOCKS 181.78.202.29:8080",
        "SOCKS 115.127.132.225:1080",
        "SOCKS 46.146.210.123:1080",
        "SOCKS 89.58.45.94:14949",
        "SOCKS 185.112.224.151:1080",
        "SOCKS 119.15.86.30:8080",
        "SOCKS 195.154.43.198:39522",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 103.181.254.105:8080",
        "SOCKS 34.216.224.9:40715",
        "SOCKS 123.182.233.70:7302",
        "SOCKS 89.58.45.94:25565",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 89.148.196.156:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}