function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 67.43.236.18:17781",
        "SOCKS 208.113.222.205:57226",
        "SOCKS 157.230.1.108:14070",
        "SOCKS 163.172.131.178:16379",
        "SOCKS 135.181.203.208:80",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 179.96.28.58:80",
        "SOCKS 117.74.65.207:80",
        "SOCKS 41.65.160.173:1976",
        "SOCKS 162.144.74.156:3620",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 98.190.102.40:4145",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 69.164.206.96:13024",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 20.27.14.220:8561",
        "SOCKS 165.227.174.249:33080",
        "SOCKS 1.180.0.162:7302",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}