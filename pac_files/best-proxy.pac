function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 124.115.21.11:1080",
        "SOCKS 165.227.174.249:33080",
        "SOCKS 98.190.102.62:4145",
        "SOCKS 43.130.52.194:8118",
        "SOCKS 218.64.122.99:7302",
        "SOCKS 72.10.160.90:3581",
        "SOCKS 94.136.188.78:4003",
        "SOCKS 47.236.37.129:18081",
        "SOCKS 8.217.147.173:8080",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 72.10.164.178:28247",
        "SOCKS 42.118.2.246:16000",
        "SOCKS 198.199.86.11:1080",
        "SOCKS 182.253.109.202:8080",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 152.53.168.53:44887",
        "SOCKS 222.129.36.92:57114",
        "SOCKS 188.136.199.187:8085",
        "SOCKS 115.72.168.217:10017",
        "SOCKS 95.179.221.141:443",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}