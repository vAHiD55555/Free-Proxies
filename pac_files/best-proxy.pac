function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 37.120.162.180:37883",
        "SOCKS 38.211.76.201:999",
        "SOCKS 159.8.114.37:8123",
        "SOCKS 20.27.15.111:8561",
        "SOCKS 152.53.171.242:33816",
        "SOCKS 203.189.158.239:1080",
        "SOCKS 152.53.171.242:52273",
        "SOCKS 152.53.171.242:37889",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 100.48.28.177:80",
        "SOCKS 152.70.137.18:8888",
        "SOCKS 103.114.53.2:8080",
        "SOCKS 110.235.252.146:1080",
        "SOCKS 62.133.62.12:1082",
        "SOCKS 152.53.171.242:15969",
        "SOCKS 152.53.171.242:11990",
        "SOCKS 139.180.140.254:1080",
        "SOCKS 37.120.162.180:10111",
        "SOCKS 27.147.130.98:9108",
        "SOCKS 125.87.82.86:3256",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}