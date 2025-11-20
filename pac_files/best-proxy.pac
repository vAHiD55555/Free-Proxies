function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 181.214.39.72:5719",
        "SOCKS 202.65.127.194:1080",
        "SOCKS 168.194.248.18:8080",
        "SOCKS 152.53.171.242:38373",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 152.53.36.101:33243",
        "SOCKS 102.219.231.22:8080",
        "SOCKS 152.53.171.242:37527",
        "SOCKS 67.43.228.251:12125",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 41.173.7.82:8080",
        "SOCKS 221.134.152.75:7302",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 44.199.110.54:3128",
        "SOCKS 152.53.36.101:59043",
        "SOCKS 72.10.160.93:7741",
        "SOCKS 51.158.105.107:16379",
        "SOCKS 152.53.171.242:18301",
        "SOCKS 139.59.1.14:1080",
        "SOCKS 185.6.9.176:8072",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}