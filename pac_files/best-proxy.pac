function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 144.91.95.238:58237",
        "SOCKS 125.141.139.198:5566",
        "SOCKS 125.141.139.112:5566",
        "SOCKS 47.101.149.27:9010",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 51.158.124.167:16379",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 206.123.156.238:4261",
        "SOCKS 204.93.169.232:60755",
        "SOCKS 80.253.246.238:6618",
        "SOCKS 154.64.240.39:1080",
        "SOCKS 47.91.65.23:3128",
        "SOCKS 101.91.242.198:6688",
        "SOCKS 205.185.120.241:5556",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 45.168.244.16:8080",
        "SOCKS 5.9.55.221:5000",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}