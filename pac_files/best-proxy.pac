function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 61.178.99.43:7302",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 171.238.91.139:1068",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 117.74.65.207:80",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 147.78.66.83:1080",
        "SOCKS 171.238.88.111:1081",
        "SOCKS 38.183.144.25:1080",
        "SOCKS 171.238.102.99:1070",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 152.53.36.101:10169",
        "SOCKS 123.182.233.70:7302",
        "SOCKS 91.201.67.63:8090",
        "SOCKS 45.70.236.194:999",
        "SOCKS 208.113.222.205:57226",
        "SOCKS 152.70.137.18:8888",
        "SOCKS 98.190.102.62:4145",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}