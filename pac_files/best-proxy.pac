function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 187.86.59.122:80",
        "SOCKS 178.17.57.222:1080",
        "SOCKS 103.142.255.32:1080",
        "SOCKS 23.27.141.243:3080",
        "SOCKS 46.101.36.247:9050",
        "SOCKS 13.53.139.178:34039",
        "SOCKS 36.138.206.172:1080",
        "SOCKS 103.20.61.251:1080",
        "SOCKS 45.76.13.121:49995",
        "SOCKS 109.238.95.167:31276",
        "SOCKS 72.56.104.252:9058",
        "SOCKS 47.76.144.139:443",
        "SOCKS 23.27.141.23:3080",
        "SOCKS 204.168.225.35:9082",
        "SOCKS 95.211.174.135:3128",
        "SOCKS 103.103.146.149:7080",
        "SOCKS 202.62.50.52:1080",
        "SOCKS 103.36.11.18:8199",
        "SOCKS 141.95.112.221:9150",
        "SOCKS 175.27.250.85:44158",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}