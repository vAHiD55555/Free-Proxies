function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 191.223.220.23:1080",
        "SOCKS 182.18.93.138:19450",
        "SOCKS 31.76.80.215:1080",
        "SOCKS 3.128.83.74:17000",
        "SOCKS 185.93.104.246:1080",
        "SOCKS 24.63.14.91:8080",
        "SOCKS 47.80.26.236:8080",
        "SOCKS 220.158.232.118:1080",
        "SOCKS 144.124.253.249:1080",
        "SOCKS 103.78.98.74:8888",
        "SOCKS 176.37.107.86:11111",
        "SOCKS 34.96.238.40:8080",
        "SOCKS 47.236.20.209:1145",
        "SOCKS 109.199.96.116:9050",
        "SOCKS 185.133.239.244:16299",
        "SOCKS 46.203.233.116:3128",
        "SOCKS 103.55.63.14:1080",
        "SOCKS 203.25.208.163:1145",
        "SOCKS 195.91.129.101:1337",
        "SOCKS 45.91.55.95:443",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}