function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.174.178.137:1020",
        "SOCKS 67.205.153.110:51528",
        "SOCKS 119.148.43.246:22122",
        "SOCKS 128.90.145.117:8118",
        "SOCKS 146.235.19.84:10808",
        "SOCKS 206.81.31.215:80",
        "SOCKS 119.148.49.206:22122",
        "SOCKS 213.165.58.7:1080",
        "SOCKS 222.129.38.21:57114",
        "SOCKS 213.35.110.67:10918",
        "SOCKS 18.141.177.23:80",
        "SOCKS 194.219.112.106:1080",
        "SOCKS 206.123.156.179:7485",
        "SOCKS 110.235.255.252:1080",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 18.138.241.37:1080",
        "SOCKS 141.0.11.244:80",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 207.254.71.62:8088",
        "SOCKS 83.219.250.8:62920",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}