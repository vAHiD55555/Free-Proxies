function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 207.254.71.62:8088",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 152.53.171.242:24619",
        "SOCKS 149.86.206.27:8080",
        "SOCKS 152.53.171.242:17193",
        "SOCKS 190.6.54.12:6969",
        "SOCKS 103.28.121.58:80",
        "SOCKS 149.202.75.85:36666",
        "SOCKS 68.183.90.210:59166",
        "SOCKS 152.53.171.242:25109",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 213.35.110.67:10808",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 223.113.89.138:1080",
        "SOCKS 193.34.95.110:8080",
        "SOCKS 176.113.73.102:3128",
        "SOCKS 152.53.171.242:31671",
        "SOCKS 111.92.173.3:8080",
        "SOCKS 152.53.171.242:14186",
        "SOCKS 64.188.124.97:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}