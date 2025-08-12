function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 42.113.20.127:16000",
        "SOCKS 72.10.160.172:28327",
        "SOCKS 54.215.46.91:20087",
        "SOCKS 8.213.43.9:3128",
        "SOCKS 49.12.103.92:8080",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 212.113.112.84:1080",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 208.113.222.205:57226",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 70.36.101.157:60013",
        "SOCKS 8.219.97.248:80",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 67.43.228.253:13271",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 27.79.185.40:16000",
        "SOCKS 72.10.160.170:3949",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 1.55.59.218:16000",
        "SOCKS 98.190.102.62:4145",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}