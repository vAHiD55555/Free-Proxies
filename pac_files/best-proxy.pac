function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 109.191.114.251:1080",
        "SOCKS 103.150.206.77:1080",
        "SOCKS 213.136.92.91:1080",
        "SOCKS 47.76.144.139:18080",
        "SOCKS 51.178.49.241:1088",
        "SOCKS 144.22.165.206:1088",
        "SOCKS 203.25.208.163:1100",
        "SOCKS 146.190.60.147:8003",
        "SOCKS 5.35.85.97:1080",
        "SOCKS 154.83.13.245:7890",
        "SOCKS 118.194.228.2:10808",
        "SOCKS 47.236.177.236:1080",
        "SOCKS 104.194.132.112:9054",
        "SOCKS 103.236.134.210:1080",
        "SOCKS 195.133.65.238:10909",
        "SOCKS 178.16.140.119:1080",
        "SOCKS 8.221.139.222:9080",
        "SOCKS 199.247.18.115:9050",
        "SOCKS 31.76.80.215:1080",
        "SOCKS 77.110.114.114:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}