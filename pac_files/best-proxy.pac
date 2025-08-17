function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 89.117.145.245:3128",
        "SOCKS 20.210.76.178:8561",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 65.108.251.40:57575",
        "SOCKS 194.28.224.17:33080",
        "SOCKS 67.43.228.252:21045",
        "SOCKS 179.96.28.58:80",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 42.96.16.176:1312",
        "SOCKS 91.84.99.28:80",
        "SOCKS 188.227.224.110:9051",
        "SOCKS 72.10.164.178:28247",
        "SOCKS 72.10.160.94:29225",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 72.10.160.171:9915",
        "SOCKS 103.109.57.42:3629",
        "SOCKS 42.193.101.38:1080",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 20.210.39.153:8561",
        "SOCKS 222.59.173.105:44185",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}