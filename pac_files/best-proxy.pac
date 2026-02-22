function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 109.245.231.73:8192",
        "SOCKS 193.34.95.110:8080",
        "SOCKS 104.37.175.200:22292",
        "SOCKS 152.53.161.111:58367",
        "SOCKS 147.45.159.213:48206",
        "SOCKS 212.33.250.53:1080",
        "SOCKS 46.21.153.16:3128",
        "SOCKS 14.56.118.44:3128",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 157.180.53.198:443",
        "SOCKS 123.54.197.49:21074",
        "SOCKS 167.172.109.12:40825",
        "SOCKS 123.54.197.52:20119",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 119.84.215.127:3256",
        "SOCKS 141.11.42.163:1080",
        "SOCKS 38.175.205.39:50161",
        "SOCKS 123.54.197.20:23927",
        "SOCKS 222.71.131.131:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}