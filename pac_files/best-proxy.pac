function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 98.185.94.94:4145",
        "SOCKS 185.54.178.193:1080",
        "SOCKS 47.237.23.143:1011",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 103.174.178.131:1020",
        "SOCKS 89.58.45.94:44499",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 188.120.245.247:12432",
        "SOCKS 104.206.98.154:3128",
        "SOCKS 8.222.135.213:10009",
        "SOCKS 80.253.246.238:6618",
        "SOCKS 45.144.234.129:54237",
        "SOCKS 89.58.45.94:46977",
        "SOCKS 89.58.45.94:29623",
        "SOCKS 188.19.15.242:8080",
        "SOCKS 89.58.45.94:50625",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 173.212.237.43:43648",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}