function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 167.172.69.123:8080",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 200.201.134.184:8787",
        "SOCKS 206.123.156.179:4733",
        "SOCKS 157.10.97.12:3128",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 103.179.218.7:8080",
        "SOCKS 103.13.193.85:8090",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 138.2.47.198:1080",
        "SOCKS 202.58.77.19:3127",
        "SOCKS 91.107.175.112:10801",
        "SOCKS 103.141.174.54:11411",
        "SOCKS 115.127.178.10:2589",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 51.15.133.214:16379",
        "SOCKS 120.224.234.71:7300",
        "SOCKS 43.208.16.199:30756",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}