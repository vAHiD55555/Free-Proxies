function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 72.10.160.171:23173",
        "SOCKS 161.35.31.237:1080",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 163.53.204.178:9813",
        "SOCKS 223.27.82.91:1080",
        "SOCKS 205.185.120.241:5556",
        "SOCKS 101.200.241.24:3128",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 67.43.236.19:21023",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 51.15.133.214:16379",
        "SOCKS 152.53.36.101:14737",
        "SOCKS 47.79.94.191:1122",
        "SOCKS 116.202.103.223:29210",
        "SOCKS 125.141.139.198:5566",
        "SOCKS 188.166.230.109:31028",
        "SOCKS 158.69.185.37:3129",
        "SOCKS 218.64.122.99:7302",
        "SOCKS 38.54.1.17:8888",
        "SOCKS 193.216.224.108:8192",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}