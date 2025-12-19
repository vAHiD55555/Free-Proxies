function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 115.127.62.50:1088",
        "SOCKS 194.233.78.142:42495",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 125.141.139.112:5566",
        "SOCKS 43.208.25.125:14",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 67.43.236.19:29535",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 51.158.124.167:16379",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 98.190.102.40:4145",
        "SOCKS 47.91.120.190:8080",
        "SOCKS 208.113.222.205:57226",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 67.43.236.20:1691",
        "SOCKS 203.189.152.49:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}