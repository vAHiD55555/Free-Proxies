function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 72.10.160.90:3581",
        "SOCKS 20.210.76.104:8561",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 20.78.26.206:8561",
        "SOCKS 142.93.129.233:8180",
        "SOCKS 115.72.160.205:10001",
        "SOCKS 98.162.96.41:4145",
        "SOCKS 91.84.99.28:80",
        "SOCKS 67.43.228.250:7015",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 184.178.172.5:15303",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 212.110.188.207:34405",
        "SOCKS 42.118.2.170:16000",
        "SOCKS 67.43.228.252:21045",
        "SOCKS 94.247.129.244:3128",
        "SOCKS 208.113.155.120:41154",
        "SOCKS 67.43.236.18:3927",
        "SOCKS 222.129.36.115:57114",
        "SOCKS 72.10.160.172:28327",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}