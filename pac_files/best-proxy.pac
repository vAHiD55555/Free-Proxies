function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 41.223.119.156:3128",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 222.129.32.173:57114",
        "SOCKS 173.209.63.69:8245",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 188.165.233.121:9151",
        "SOCKS 27.79.132.246:16000",
        "SOCKS 103.44.19.217:1111",
        "SOCKS 67.43.236.21:5423",
        "SOCKS 91.84.99.28:80",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 208.113.155.120:41154",
        "SOCKS 8.209.249.89:3128",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 222.129.36.115:57114",
        "SOCKS 195.178.53.128:999",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 27.71.139.208:16000",
        "SOCKS 222.129.32.188:57114",
        "SOCKS 72.10.160.171:9915",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}