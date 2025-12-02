function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 112.86.116.24:1080",
        "SOCKS 51.158.98.211:16379",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 20.210.76.175:8561",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 114.142.179.168:8080",
        "SOCKS 152.53.36.101:13289",
        "SOCKS 152.53.36.101:20077",
        "SOCKS 152.53.36.101:10093",
        "SOCKS 103.174.178.137:1020",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 152.53.36.101:12747",
        "SOCKS 152.53.36.101:13646",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 139.162.78.109:1080",
        "SOCKS 103.174.178.133:1020",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 121.165.169.217:8050",
        "SOCKS 135.181.203.208:80",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}