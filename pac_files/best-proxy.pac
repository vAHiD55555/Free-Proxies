function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 2.144.6.212:12111",
        "SOCKS 146.235.19.84:10919",
        "SOCKS 81.12.119.171:8080",
        "SOCKS 154.17.27.79:21266",
        "SOCKS 84.17.51.241:3128",
        "SOCKS 37.200.67.75:1080",
        "SOCKS 3.24.178.81:80",
        "SOCKS 45.151.182.9:3128",
        "SOCKS 46.146.220.247:1080",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 95.80.103.215:1080",
        "SOCKS 15.207.196.77:3128",
        "SOCKS 194.233.78.142:42495",
        "SOCKS 176.124.219.49:3128",
        "SOCKS 185.244.208.195:23699",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 144.124.227.90:10880",
        "SOCKS 176.113.73.104:3128",
        "SOCKS 193.239.86.249:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}