function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 112.86.116.24:1080",
        "SOCKS 160.25.8.2:11011",
        "SOCKS 103.189.218.158:1080",
        "SOCKS 116.203.139.209:5678",
        "SOCKS 37.200.67.75:1080",
        "SOCKS 115.127.83.142:1088",
        "SOCKS 188.40.96.177:8118",
        "SOCKS 72.10.160.91:2473",
        "SOCKS 114.80.40.128:3081",
        "SOCKS 14.239.102.60:1001",
        "SOCKS 40.176.96.235:8037",
        "SOCKS 43.208.25.125:19201",
        "SOCKS 125.141.139.198:5566",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 47.245.89.162:1011",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 77.105.137.42:8080",
        "SOCKS 203.25.208.163:1111",
        "SOCKS 65.108.203.36:18080",
        "SOCKS 128.199.202.122:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}