function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 87.255.245.105:1080",
        "SOCKS 43.134.53.69:1080",
        "SOCKS 47.82.65.128:1011",
        "SOCKS 202.91.41.102:1080",
        "SOCKS 161.97.106.223:9050",
        "SOCKS 193.30.123.61:9050",
        "SOCKS 216.106.179.216:49571",
        "SOCKS 211.162.68.57:1088",
        "SOCKS 103.134.221.52:1111",
        "SOCKS 45.77.37.39:2045",
        "SOCKS 79.111.118.99:1080",
        "SOCKS 220.158.232.118:1080",
        "SOCKS 185.245.183.130:8118",
        "SOCKS 104.207.139.62:1080",
        "SOCKS 45.144.53.63:5000",
        "SOCKS 110.235.248.81:1080",
        "SOCKS 43.135.135.65:1080",
        "SOCKS 82.209.251.53:45678",
        "SOCKS 45.118.146.219:1080",
        "SOCKS 188.191.164.55:4890",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}