function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 5.255.117.127:1080",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 13.158.188.161:3128",
        "SOCKS 188.166.252.135:8080",
        "SOCKS 115.127.83.142:1088",
        "SOCKS 160.25.196.44:8090",
        "SOCKS 68.183.90.210:59166",
        "SOCKS 185.244.208.195:23699",
        "SOCKS 38.46.233.250:3127",
        "SOCKS 125.141.139.110:5566",
        "SOCKS 49.0.26.183:1080",
        "SOCKS 41.223.119.156:3128",
        "SOCKS 154.127.219.242:999",
        "SOCKS 5.255.117.250:1080",
        "SOCKS 72.10.160.171:32063",
        "SOCKS 185.38.111.1:8080",
        "SOCKS 62.60.131.195:4221",
        "SOCKS 95.111.226.235:3128",
        "SOCKS 222.71.131.131:1080",
        "SOCKS 36.255.98.175:9090",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}