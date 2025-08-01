function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 208.113.155.120:41154",
        "SOCKS 8.218.238.34:8855",
        "SOCKS 121.205.213.141:4216",
        "SOCKS 42.118.0.241:16000",
        "SOCKS 20.78.118.91:8561",
        "SOCKS 223.135.156.183:8080",
        "SOCKS 91.238.105.64:2024",
        "SOCKS 174.75.211.222:4145",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 72.10.160.172:28327",
        "SOCKS 40.172.232.213:29214",
        "SOCKS 222.129.36.157:57114",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 47.89.184.18:3128",
        "SOCKS 72.10.160.94:29225",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 42.118.74.81:16000",
        "SOCKS 98.190.102.40:4145",
        "SOCKS 1.54.111.112:16000",
        "SOCKS 1.54.76.119:16000",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}