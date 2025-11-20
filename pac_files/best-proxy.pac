function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 152.53.36.101:12721",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 103.191.218.77:8199",
        "SOCKS 152.53.171.242:12835",
        "SOCKS 98.190.102.62:4145",
        "SOCKS 120.77.203.0:443",
        "SOCKS 152.53.36.101:56789",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 152.53.171.242:53691",
        "SOCKS 125.24.145.239:8080",
        "SOCKS 185.244.208.195:23699",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 174.138.62.182:43715",
        "SOCKS 183.166.132.124:3000",
        "SOCKS 103.151.30.49:1080",
        "SOCKS 152.53.171.242:59043",
        "SOCKS 54.215.46.91:20087",
        "SOCKS 67.73.240.1:8081",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}