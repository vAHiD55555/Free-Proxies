function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 98.185.94.76:4145",
        "SOCKS 51.159.107.202:8118",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 45.89.28.226:12915",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 147.75.34.105:443",
        "SOCKS 116.98.190.20:1010",
        "SOCKS 211.22.151.163:60808",
        "SOCKS 72.10.160.91:18749",
        "SOCKS 72.10.160.93:26713",
        "SOCKS 209.97.150.167:1080",
        "SOCKS 116.103.130.125:1008",
        "SOCKS 223.204.85.163:8080",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 164.13.167.43:8080",
        "SOCKS 65.38.213.154:8881",
        "SOCKS 24.249.199.4:4145",
        "SOCKS 208.113.222.205:57226",
        "SOCKS 67.43.236.18:3927",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}