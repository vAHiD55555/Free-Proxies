function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 77.105.137.42:8080",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 123.21.22.132:1007",
        "SOCKS 194.147.221.11:8888",
        "SOCKS 58.187.71.222:16000",
        "SOCKS 46.39.105.157:8080",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 51.15.236.150:16379",
        "SOCKS 20.78.118.91:8561",
        "SOCKS 37.187.29.43:42450",
        "SOCKS 202.232.52.162:8080",
        "SOCKS 140.238.184.182:3128",
        "SOCKS 65.38.213.154:8881",
        "SOCKS 165.227.174.249:33080",
        "SOCKS 121.205.215.44:4216",
        "SOCKS 24.249.199.4:4145",
        "SOCKS 34.124.190.108:8080",
        "SOCKS 125.164.209.173:3128",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 124.65.117.38:7302",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}