function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 193.233.86.198:1080",
        "SOCKS 176.65.140.214:1081",
        "SOCKS 72.18.53.189:9119",
        "SOCKS 202.62.50.222:1080",
        "SOCKS 94.73.251.19:1080",
        "SOCKS 46.224.153.114:9050",
        "SOCKS 120.133.82.62:44040",
        "SOCKS 91.98.97.79:2222",
        "SOCKS 8.215.112.240:7777",
        "SOCKS 103.165.128.75:1080",
        "SOCKS 178.250.156.112:443",
        "SOCKS 103.6.235.13:5555",
        "SOCKS 191.252.111.160:7000",
        "SOCKS 104.64.214.122:2345",
        "SOCKS 94.19.248.31:1080",
        "SOCKS 185.194.217.97:1080",
        "SOCKS 110.235.247.248:1080",
        "SOCKS 103.121.120.242:1080",
        "SOCKS 43.218.124.29:10839",
        "SOCKS 118.194.228.2:10808",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}