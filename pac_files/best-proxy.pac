function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 58.186.131.73:16000",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 89.58.45.94:43476",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 94.136.188.78:4003",
        "SOCKS 20.27.11.248:8561",
        "SOCKS 37.18.73.60:5566",
        "SOCKS 208.113.222.205:57226",
        "SOCKS 208.113.155.120:41154",
        "SOCKS 192.252.208.67:14287",
        "SOCKS 98.190.102.40:4145",
        "SOCKS 89.117.145.245:3128",
        "SOCKS 34.166.117.165:1080",
        "SOCKS 212.124.22.245:1080",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 184.178.172.5:15303",
        "SOCKS 212.47.243.66:16379",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 183.80.22.13:16000",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}