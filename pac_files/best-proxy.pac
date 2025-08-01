function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 52.51.50.129:3128",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 184.178.172.5:15303",
        "SOCKS 141.11.37.220:8080",
        "SOCKS 89.58.45.94:43476",
        "SOCKS 72.195.34.42:4145",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 72.10.160.174:21931",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 222.129.32.188:57114",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 184.178.172.28:15294",
        "SOCKS 98.162.96.41:4145",
        "SOCKS 135.181.203.208:80",
        "SOCKS 20.78.118.91:8561",
        "SOCKS 72.10.160.90:3581",
        "SOCKS 116.202.103.223:29210",
        "SOCKS 212.110.188.202:34409",
        "SOCKS 139.59.1.14:1080",
        "SOCKS 60.13.42.157:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}