function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 185.252.147.44:1080",
        "SOCKS 130.17.2.209:3128",
        "SOCKS 194.87.147.132:1080",
        "SOCKS 185.200.176.236:1080",
        "SOCKS 87.120.187.113:1080",
        "SOCKS 199.247.29.193:50000",
        "SOCKS 185.247.224.99:39997",
        "SOCKS 203.189.135.73:1080",
        "SOCKS 5.189.17.23:9050",
        "SOCKS 95.181.213.41:10808",
        "SOCKS 204.216.136.58:9050",
        "SOCKS 203.25.208.163:1145",
        "SOCKS 216.106.179.216:49155",
        "SOCKS 72.56.106.48:1080",
        "SOCKS 176.120.84.29:1080",
        "SOCKS 47.250.211.53:1080",
        "SOCKS 160.187.1.225:9050",
        "SOCKS 102.69.146.59:7080",
        "SOCKS 101.36.104.46:10808",
        "SOCKS 20.78.26.206:8561",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}