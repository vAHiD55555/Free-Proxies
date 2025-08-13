function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 188.166.230.109:31028",
        "SOCKS 85.239.144.149:8080",
        "SOCKS 212.34.145.44:3128",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 27.79.129.170:16000",
        "SOCKS 138.68.21.132:40467",
        "SOCKS 152.53.194.55:21609",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 67.43.236.20:6231",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 188.120.245.247:12432",
        "SOCKS 188.166.104.152:49981",
        "SOCKS 8.219.97.248:80",
        "SOCKS 115.72.170.42:10001",
        "SOCKS 72.10.164.178:28247",
        "SOCKS 114.96.218.231:3000",
        "SOCKS 64.69.43.232:1080",
        "SOCKS 135.181.203.208:80",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}