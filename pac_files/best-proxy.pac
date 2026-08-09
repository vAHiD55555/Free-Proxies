function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 47.238.128.246:41451",
        "SOCKS 103.118.85.144:1080",
        "SOCKS 195.19.50.135:1080",
        "SOCKS 157.254.32.52:10800",
        "SOCKS 15.204.235.27:1080",
        "SOCKS 47.251.87.74:8888",
        "SOCKS 47.76.144.139:8008",
        "SOCKS 5.189.17.23:9050",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 8.221.138.111:9000",
        "SOCKS 67.210.146.50:11080",
        "SOCKS 124.248.191.117:1080",
        "SOCKS 144.21.39.252:1080",
        "SOCKS 47.238.128.246:5000",
        "SOCKS 103.18.77.69:1080",
        "SOCKS 165.245.187.193:3128",
        "SOCKS 47.236.20.209:1145",
        "SOCKS 3.128.83.74:17000",
        "SOCKS 194.87.10.38:1234",
        "SOCKS 5.189.160.163:9100",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}