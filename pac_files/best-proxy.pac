function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 47.115.42.157:8044",
        "SOCKS 103.4.77.27:8199",
        "SOCKS 208.113.222.205:57226",
        "SOCKS 89.108.83.137:1080",
        "SOCKS 124.115.21.11:1080",
        "SOCKS 173.212.237.43:43648",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 103.174.178.137:1020",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 103.163.244.106:1080",
        "SOCKS 139.159.97.42:9798",
        "SOCKS 103.138.123.242:8082",
        "SOCKS 98.190.102.62:4145",
        "SOCKS 102.36.127.231:1080",
        "SOCKS 103.242.175.241:8899",
        "SOCKS 161.35.31.237:1080",
        "SOCKS 162.144.74.156:3620",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}