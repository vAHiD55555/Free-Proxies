function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 221.134.152.75:7302",
        "SOCKS 185.189.112.133:3128",
        "SOCKS 8.211.200.183:45",
        "SOCKS 47.91.120.190:8080",
        "SOCKS 81.12.119.171:8080",
        "SOCKS 47.83.112.49:1080",
        "SOCKS 185.123.143.251:3128",
        "SOCKS 37.120.222.132:3128",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 67.43.228.252:19311",
        "SOCKS 157.230.1.108:14070",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 41.65.160.172:1976",
        "SOCKS 88.216.215.147:9094",
        "SOCKS 120.77.203.0:443",
        "SOCKS 51.158.98.211:16379",
        "SOCKS 150.107.140.238:3128",
        "SOCKS 185.244.208.195:23699",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}