function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 91.121.48.221:38711",
        "SOCKS 72.10.160.173:1157",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 103.106.112.166:1234",
        "SOCKS 51.15.133.214:16379",
        "SOCKS 80.253.246.238:6618",
        "SOCKS 152.53.36.101:23653",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 159.203.61.169:1080",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 114.80.36.171:3081",
        "SOCKS 89.169.36.109:1080",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 94.247.129.244:3128",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 152.70.137.18:8888",
        "SOCKS 178.128.167.129:1080",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 195.248.240.25:4443",
        "SOCKS 43.208.25.125:8004",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}