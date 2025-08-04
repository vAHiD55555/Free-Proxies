function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 27.254.142.25:1080",
        "SOCKS 67.43.228.251:28401",
        "SOCKS 24.249.199.4:4145",
        "SOCKS 114.96.218.231:3000",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 209.121.164.50:31147",
        "SOCKS 89.58.45.94:43476",
        "SOCKS 72.10.160.171:9915",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 116.202.103.223:29210",
        "SOCKS 42.112.189.8:16000",
        "SOCKS 20.78.26.206:8561",
        "SOCKS 41.223.119.156:3128",
        "SOCKS 184.178.172.5:15303",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 128.199.20.45:8080",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 103.109.57.42:3629",
        "SOCKS 161.35.70.249:1080",
        "SOCKS 172.104.4.144:9050",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}