function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 194.87.147.132:1080",
        "SOCKS 72.195.34.42:4145",
        "SOCKS 175.27.250.85:44204",
        "SOCKS 72.255.38.180:1080",
        "SOCKS 175.27.250.85:44034",
        "SOCKS 8.215.12.103:3129",
        "SOCKS 112.28.149.152:8443",
        "SOCKS 8.219.97.248:80",
        "SOCKS 46.224.153.114:9050",
        "SOCKS 193.233.86.198:1080",
        "SOCKS 40.160.27.66:1080",
        "SOCKS 82.193.116.160:21003",
        "SOCKS 107.191.44.214:1081",
        "SOCKS 113.176.118.150:1080",
        "SOCKS 144.24.47.42:1080",
        "SOCKS 116.104.53.221:1090",
        "SOCKS 59.38.113.185:20000",
        "SOCKS 43.153.62.53:47783",
        "SOCKS 109.236.57.144:1080",
        "SOCKS 146.235.227.201:9150",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}