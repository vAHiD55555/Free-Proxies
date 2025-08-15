function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 43.131.9.114:1777",
        "SOCKS 65.108.203.35:28080",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 116.203.139.209:5678",
        "SOCKS 125.103.83.163:8118",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 98.190.102.62:4145",
        "SOCKS 77.238.103.98:8080",
        "SOCKS 212.47.243.66:16379",
        "SOCKS 72.10.160.173:19329",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 212.113.112.84:1080",
        "SOCKS 67.43.236.18:3927",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 8.209.255.114:20172",
        "SOCKS 152.53.194.55:21609",
        "SOCKS 72.10.160.90:3581",
        "SOCKS 65.108.159.129:8081",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 116.107.173.169:10001",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}