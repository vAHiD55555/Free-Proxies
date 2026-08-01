function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 68.64.179.186:1080",
        "SOCKS 103.103.146.149:7080",
        "SOCKS 89.22.238.103:38871",
        "SOCKS 188.68.57.86:9050",
        "SOCKS 77.110.103.146:1080",
        "SOCKS 101.255.137.2:80",
        "SOCKS 65.109.65.239:28080",
        "SOCKS 221.10.57.128:5138",
        "SOCKS 141.148.132.254:9050",
        "SOCKS 38.49.210.79:40000",
        "SOCKS 131.153.1.46:20015",
        "SOCKS 185.194.217.97:1080",
        "SOCKS 216.106.179.216:49563",
        "SOCKS 79.134.4.192:1080",
        "SOCKS 149.129.225.235:7777",
        "SOCKS 188.168.51.56:1080",
        "SOCKS 119.148.20.109:22122",
        "SOCKS 47.89.159.212:8010",
        "SOCKS 188.132.174.89:9080",
        "SOCKS 193.25.215.182:22222",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}