function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 222.129.32.173:57114",
        "SOCKS 1.55.59.212:16000",
        "SOCKS 47.89.159.212:8443",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 98.190.102.62:4145",
        "SOCKS 98.162.96.41:4145",
        "SOCKS 67.43.236.20:6231",
        "SOCKS 152.53.168.53:44887",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 72.10.160.93:26713",
        "SOCKS 67.43.228.251:28401",
        "SOCKS 43.224.10.43:6667",
        "SOCKS 208.113.222.205:57226",
        "SOCKS 222.59.173.105:44144",
        "SOCKS 94.182.146.250:8080",
        "SOCKS 188.165.233.121:9151",
        "SOCKS 77.110.114.116:8080",
        "SOCKS 192.203.0.250:999",
        "SOCKS 213.87.103.76:3128",
        "SOCKS 116.203.139.209:5678",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}