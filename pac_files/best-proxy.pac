function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 72.10.160.171:9915",
        "SOCKS 141.11.37.220:8080",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 192.252.208.70:14282",
        "SOCKS 65.108.159.129:8081",
        "SOCKS 117.74.65.207:80",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 89.58.45.94:43476",
        "SOCKS 219.147.112.150:1080",
        "SOCKS 184.178.172.5:15303",
        "SOCKS 121.205.213.141:4216",
        "SOCKS 42.118.0.226:16000",
        "SOCKS 27.79.179.151:16000",
        "SOCKS 146.103.99.6:6588",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 178.32.203.11:50006",
        "SOCKS 37.120.162.180:42824",
        "SOCKS 20.78.118.91:8561",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 222.129.32.188:57114",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}