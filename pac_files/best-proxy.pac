function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 166.249.54.61:7234",
        "SOCKS 62.60.131.204:14150",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 183.96.6.112:3128",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 62.60.131.204:5057",
        "SOCKS 167.172.109.12:37355",
        "SOCKS 36.255.98.168:6956",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 115.221.242.131:9999",
        "SOCKS 121.130.199.10:3128",
        "SOCKS 62.60.131.204:6433",
        "SOCKS 101.32.244.5:3128",
        "SOCKS 67.205.190.164:8080",
        "SOCKS 5.255.117.127:1080",
        "SOCKS 113.166.13.135:3128",
        "SOCKS 159.8.114.37:80",
        "SOCKS 167.172.159.43:39019",
        "SOCKS 62.60.131.188:5201",
        "SOCKS 67.205.153.110:51528",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}