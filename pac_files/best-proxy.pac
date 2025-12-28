function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 87.120.166.178:8080",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 62.60.131.194:8085",
        "SOCKS 62.60.131.193:13279",
        "SOCKS 20.78.118.91:8561",
        "SOCKS 114.96.218.231:3000",
        "SOCKS 104.238.100.115:45314",
        "SOCKS 110.235.240.166:1080",
        "SOCKS 205.185.126.51:5556",
        "SOCKS 20.78.26.206:8561",
        "SOCKS 202.62.42.167:1080",
        "SOCKS 98.190.102.40:4145",
        "SOCKS 125.141.139.198:5566",
        "SOCKS 221.134.152.75:7302",
        "SOCKS 20.27.15.111:8561",
        "SOCKS 202.62.50.222:1080",
        "SOCKS 142.54.237.38:4145",
        "SOCKS 110.235.240.104:1080",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 110.235.248.81:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}