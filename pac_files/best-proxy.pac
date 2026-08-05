function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 202.73.27.98:1080",
        "SOCKS 110.235.247.206:1080",
        "SOCKS 185.135.81.149:9060",
        "SOCKS 101.36.104.239:10808",
        "SOCKS 178.250.156.112:443",
        "SOCKS 178.150.77.204:10801",
        "SOCKS 138.3.218.141:54261",
        "SOCKS 202.62.55.95:1080",
        "SOCKS 38.76.215.92:1080",
        "SOCKS 144.31.75.120:11112",
        "SOCKS 216.22.13.244:1083",
        "SOCKS 178.130.47.50:1082",
        "SOCKS 213.199.47.140:1080",
        "SOCKS 185.200.177.138:445",
        "SOCKS 13.140.164.179:3559",
        "SOCKS 124.248.191.117:1080",
        "SOCKS 160.250.54.7:9000",
        "SOCKS 104.234.124.3:1080",
        "SOCKS 160.22.200.70:69",
        "SOCKS 202.62.50.222:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}