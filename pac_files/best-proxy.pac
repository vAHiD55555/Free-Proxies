function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 135.181.213.184:40000",
        "SOCKS 152.53.168.53:44887",
        "SOCKS 72.10.160.173:19329",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 115.221.245.167:1080",
        "SOCKS 213.87.103.76:3128",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 27.79.211.140:16000",
        "SOCKS 103.44.19.217:1111",
        "SOCKS 171.228.154.209:10089",
        "SOCKS 58.186.162.58:16000",
        "SOCKS 208.113.222.205:57226",
        "SOCKS 27.79.208.74:16000",
        "SOCKS 43.224.10.43:6667",
        "SOCKS 42.96.16.176:1312",
        "SOCKS 51.159.107.202:8118",
        "SOCKS 20.78.26.206:8561",
        "SOCKS 27.71.139.208:16000",
        "SOCKS 42.118.1.72:16000",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}