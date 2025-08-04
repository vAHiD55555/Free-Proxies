function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 27.153.141.90:4216",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 184.178.172.5:15303",
        "SOCKS 20.210.76.104:8561",
        "SOCKS 67.43.228.253:13271",
        "SOCKS 20.78.26.206:8561",
        "SOCKS 124.115.21.11:1080",
        "SOCKS 116.203.139.209:5678",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 41.223.119.156:3128",
        "SOCKS 192.177.139.214:8000",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 115.221.245.167:1080",
        "SOCKS 144.76.159.121:8080",
        "SOCKS 121.205.215.44:4216",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 5.190.36.4:3128",
        "SOCKS 92.58.181.171:7575",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}