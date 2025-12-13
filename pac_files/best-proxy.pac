function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.109.57.42:3629",
        "SOCKS 123.182.233.70:7302",
        "SOCKS 52.202.30.36:80",
        "SOCKS 61.130.151.230:7302",
        "SOCKS 121.205.213.141:4216",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 146.19.9.236:80",
        "SOCKS 222.129.32.173:57114",
        "SOCKS 174.75.211.193:4145",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 222.71.131.131:1080",
        "SOCKS 51.15.133.214:16379",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 67.205.153.110:51528",
        "SOCKS 139.159.97.42:9798",
        "SOCKS 205.185.126.51:5556",
        "SOCKS 185.112.224.151:1080",
        "SOCKS 189.72.85.254:8080",
        "SOCKS 195.154.43.198:39522",
        "SOCKS 68.183.180.48:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}