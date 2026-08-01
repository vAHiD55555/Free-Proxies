function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 118.70.151.55:1080",
        "SOCKS 141.147.10.92:555",
        "SOCKS 47.90.149.238:8443",
        "SOCKS 43.164.136.189:1080",
        "SOCKS 104.161.23.122:5069",
        "SOCKS 61.9.32.142:58765",
        "SOCKS 203.175.127.240:8080",
        "SOCKS 186.26.95.249:61445",
        "SOCKS 160.191.83.230:8080",
        "SOCKS 45.81.129.252:8888",
        "SOCKS 203.25.208.163:1145",
        "SOCKS 47.91.109.17:8081",
        "SOCKS 176.126.70.111:16379",
        "SOCKS 46.146.210.123:1080",
        "SOCKS 172.236.14.204:1080",
        "SOCKS 43.164.3.124:1080",
        "SOCKS 81.177.165.209:10808",
        "SOCKS 176.12.65.24:443",
        "SOCKS 36.138.206.172:1080",
        "SOCKS 167.179.119.114:5080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}