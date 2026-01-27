function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 36.255.98.168:4017",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 62.60.131.204:8131",
        "SOCKS 62.60.131.253:4949",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 176.113.73.99:3128",
        "SOCKS 36.255.98.167:10805",
        "SOCKS 185.138.120.109:8080",
        "SOCKS 188.120.245.247:12432",
        "SOCKS 62.60.131.205:4852",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 51.48.124.225:8724",
        "SOCKS 62.60.131.204:6433",
        "SOCKS 165.227.104.122:48500",
        "SOCKS 178.22.31.205:1081",
        "SOCKS 114.96.218.231:3000",
        "SOCKS 62.60.131.203:5182",
        "SOCKS 62.60.131.203:8192",
        "SOCKS 91.107.148.58:53967",
        "SOCKS 142.132.139.242:5141",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}