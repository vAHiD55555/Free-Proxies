function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 47.243.75.202:58854",
        "SOCKS 72.10.160.90:3581",
        "SOCKS 67.43.228.251:28401",
        "SOCKS 115.221.245.167:1080",
        "SOCKS 72.10.164.178:28247",
        "SOCKS 20.78.26.206:8561",
        "SOCKS 116.105.222.48:10002",
        "SOCKS 121.205.215.44:4216",
        "SOCKS 8.208.94.223:3128",
        "SOCKS 51.158.70.246:16379",
        "SOCKS 157.173.101.217:3128",
        "SOCKS 62.210.37.74:8012",
        "SOCKS 72.10.160.94:29225",
        "SOCKS 103.109.57.42:3629",
        "SOCKS 208.113.222.205:57226",
        "SOCKS 157.66.16.63:8181",
        "SOCKS 72.195.34.42:4145",
        "SOCKS 159.89.239.166:18084",
        "SOCKS 98.190.102.62:4145",
        "SOCKS 20.27.15.49:8561",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}