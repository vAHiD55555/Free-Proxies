function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 98.190.102.62:4145",
        "SOCKS 20.78.26.206:8561",
        "SOCKS 150.109.66.153:1111",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 183.166.132.124:3000",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 209.97.150.167:1080",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 102.209.56.21:80",
        "SOCKS 222.129.32.188:57114",
        "SOCKS 20.210.76.175:8561",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 154.0.14.116:3128",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 72.10.160.174:26083",
        "SOCKS 117.250.3.58:8080",
        "SOCKS 42.113.28.61:16000",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}