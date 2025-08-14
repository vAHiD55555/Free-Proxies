function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 184.185.2.45:4145",
        "SOCKS 27.79.170.93:16000",
        "SOCKS 157.180.121.252:46206",
        "SOCKS 72.10.160.173:19329",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 219.147.112.150:1080",
        "SOCKS 51.159.107.202:8118",
        "SOCKS 141.253.123.10:3150",
        "SOCKS 154.72.204.78:8080",
        "SOCKS 18.135.100.214:3128",
        "SOCKS 135.181.203.208:80",
        "SOCKS 20.210.76.175:8561",
        "SOCKS 20.210.76.178:8561",
        "SOCKS 116.203.56.216:2212",
        "SOCKS 20.27.15.111:8561",
        "SOCKS 117.68.147.8:3000",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}