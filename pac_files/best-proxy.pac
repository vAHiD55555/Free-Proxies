function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 78.29.46.43:1080",
        "SOCKS 222.129.36.157:57114",
        "SOCKS 51.158.64.130:16379",
        "SOCKS 157.180.121.252:11099",
        "SOCKS 37.221.193.221:12330",
        "SOCKS 114.236.93.203:15800",
        "SOCKS 3.107.252.199:45157",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 40.192.100.189:8141",
        "SOCKS 103.133.26.11:8080",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 213.238.180.33:3128",
        "SOCKS 20.27.15.111:8561",
        "SOCKS 185.244.77.62:1080",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 103.148.112.69:8199",
        "SOCKS 47.86.42.224:1024",
        "SOCKS 18.188.141.177:1145",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}