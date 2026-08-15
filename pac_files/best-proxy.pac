function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 165.245.187.193:3128",
        "SOCKS 104.207.139.62:1080",
        "SOCKS 147.45.221.111:1082",
        "SOCKS 47.238.128.246:3129",
        "SOCKS 3.129.27.9:17000",
        "SOCKS 176.120.28.106:8080",
        "SOCKS 77.239.108.222:11094",
        "SOCKS 159.195.49.27:1080",
        "SOCKS 185.196.61.251:1080",
        "SOCKS 216.106.179.216:49434",
        "SOCKS 85.113.43.181:1080",
        "SOCKS 145.241.233.71:1080",
        "SOCKS 45.76.164.255:1085",
        "SOCKS 31.76.10.157:8080",
        "SOCKS 103.189.218.76:6969",
        "SOCKS 47.82.72.88:10809",
        "SOCKS 103.138.145.228:1999",
        "SOCKS 5.59.248.134:8081",
        "SOCKS 144.31.181.52:8080",
        "SOCKS 72.195.34.41:4145",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}