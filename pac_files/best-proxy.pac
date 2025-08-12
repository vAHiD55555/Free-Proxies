function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 72.10.160.90:3581",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 18.135.100.214:3128",
        "SOCKS 98.190.102.62:4145",
        "SOCKS 67.43.236.19:3527",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 20.27.14.220:8561",
        "SOCKS 208.113.222.205:57226",
        "SOCKS 72.10.160.92:3709",
        "SOCKS 202.232.52.162:8080",
        "SOCKS 178.20.41.152:3128",
        "SOCKS 98.190.102.40:4145",
        "SOCKS 65.108.159.129:8081",
        "SOCKS 173.209.63.68:8037",
        "SOCKS 1.55.199.150:16000",
        "SOCKS 116.202.103.223:29210",
        "SOCKS 42.118.0.67:16000",
        "SOCKS 27.71.139.254:16000",
        "SOCKS 27.79.184.108:16000",
        "SOCKS 188.227.224.110:9051",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}