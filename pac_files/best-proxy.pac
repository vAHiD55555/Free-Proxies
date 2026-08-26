function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 118.145.141.251:44055",
        "SOCKS 45.74.31.30:33294",
        "SOCKS 38.175.197.50:5555",
        "SOCKS 47.237.2.245:443",
        "SOCKS 198.252.108.20:9050",
        "SOCKS 107.173.230.93:40000",
        "SOCKS 8.215.112.240:7777",
        "SOCKS 103.157.78.22:8199",
        "SOCKS 118.145.141.251:44088",
        "SOCKS 45.74.31.30:5322",
        "SOCKS 118.145.141.251:44211",
        "SOCKS 47.91.121.127:3129",
        "SOCKS 47.236.177.236:1080",
        "SOCKS 45.32.195.109:9050",
        "SOCKS 103.210.161.8:1080",
        "SOCKS 103.174.122.215:3128",
        "SOCKS 118.145.141.251:44130",
        "SOCKS 151.185.59.36:8080",
        "SOCKS 45.144.54.40:1080",
        "SOCKS 14.139.235.82:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}