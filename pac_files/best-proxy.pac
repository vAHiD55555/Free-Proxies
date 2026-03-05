function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 113.121.240.114:3256",
        "SOCKS 167.172.109.12:46249",
        "SOCKS 79.110.52.252:3128",
        "SOCKS 34.101.184.164:3128",
        "SOCKS 217.76.245.80:999",
        "SOCKS 180.183.97.16:8080",
        "SOCKS 222.184.48.241:22222",
        "SOCKS 217.172.122.14:8080",
        "SOCKS 103.178.86.10:8080",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 43.208.16.199:30756",
        "SOCKS 113.100.209.184:3128",
        "SOCKS 109.120.135.192:1080",
        "SOCKS 116.254.118.180:80",
        "SOCKS 104.248.59.38:80",
        "SOCKS 194.233.78.142:42495",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 34.213.132.214:6000",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 51.158.64.130:16379",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}