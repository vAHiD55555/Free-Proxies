function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 188.120.245.247:12432",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 27.79.135.237:16000",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 189.180.46.175:8118",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 67.43.228.251:28401",
        "SOCKS 121.205.215.44:4216",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 43.159.54.102:8888",
        "SOCKS 67.43.236.18:3927",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 80.78.30.182:3128",
        "SOCKS 171.237.94.84:10007",
        "SOCKS 27.71.137.84:16000",
        "SOCKS 65.38.213.154:8881",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 14.239.153.245:8080",
        "SOCKS 117.68.147.8:3000",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}