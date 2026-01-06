function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 37.157.217.144:10810",
        "SOCKS 119.18.144.12:8585",
        "SOCKS 91.107.138.98:2255",
        "SOCKS 121.206.205.75:4216",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 123.182.233.70:7302",
        "SOCKS 1.20.169.193:8080",
        "SOCKS 103.155.190.250:8080",
        "SOCKS 164.163.42.26:10000",
        "SOCKS 36.95.142.35:8080",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 103.242.175.241:8899",
        "SOCKS 200.59.191.232:999",
        "SOCKS 203.189.135.105:1080",
        "SOCKS 62.133.62.12:1081",
        "SOCKS 200.125.170.221:999",
        "SOCKS 203.25.208.163:1100",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 134.122.21.142:33346",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}