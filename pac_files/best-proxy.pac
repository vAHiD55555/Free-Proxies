function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 171.253.95.238:1080",
        "SOCKS 194.67.51.210:1080",
        "SOCKS 171.253.95.3:1055",
        "SOCKS 90.151.105.38:1080",
        "SOCKS 38.210.179.146:999",
        "SOCKS 176.119.246.211:1080",
        "SOCKS 78.24.185.236:1080",
        "SOCKS 174.64.199.82:4145",
        "SOCKS 178.16.140.119:1080",
        "SOCKS 109.191.114.251:1080",
        "SOCKS 43.129.80.138:18999",
        "SOCKS 150.241.70.103:6666",
        "SOCKS 112.28.149.152:8443",
        "SOCKS 67.210.146.50:11080",
        "SOCKS 72.195.34.42:4145",
        "SOCKS 212.48.134.145:1080",
        "SOCKS 153.80.242.105:8080",
        "SOCKS 103.143.11.246:9005",
        "SOCKS 43.156.201.214:2080",
        "SOCKS 180.158.222.93:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}