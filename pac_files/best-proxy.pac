function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 98.190.102.62:4145",
        "SOCKS 174.75.211.222:4145",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 208.113.222.205:57226",
        "SOCKS 24.249.199.4:4145",
        "SOCKS 43.224.10.43:6667",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 98.190.102.40:4145",
        "SOCKS 188.165.233.121:9151",
        "SOCKS 98.162.96.41:4145",
        "SOCKS 116.202.103.223:29210",
        "SOCKS 222.129.36.92:57114",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 103.109.57.42:3629",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}