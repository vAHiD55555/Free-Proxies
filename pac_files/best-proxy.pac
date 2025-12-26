function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 37.200.66.166:9051",
        "SOCKS 217.173.31.28:1080",
        "SOCKS 222.59.173.105:44054",
        "SOCKS 89.108.83.137:1080",
        "SOCKS 203.189.153.170:1080",
        "SOCKS 115.127.83.142:1088",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 37.187.29.43:42450",
        "SOCKS 37.192.133.82:1080",
        "SOCKS 103.167.109.101:8080",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 35.152.252.253:8080",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 87.229.205.227:8080",
        "SOCKS 103.76.149.140:1080",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 188.227.224.110:9051",
        "SOCKS 202.72.232.121:1080",
        "SOCKS 203.189.158.218:1080",
        "SOCKS 117.74.65.207:443",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}