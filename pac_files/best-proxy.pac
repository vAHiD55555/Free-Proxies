function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 156.244.11.6:443",
        "SOCKS 85.143.254.38:1080",
        "SOCKS 101.91.242.198:6688",
        "SOCKS 116.203.139.209:5678",
        "SOCKS 72.221.196.157:35904",
        "SOCKS 167.234.224.70:5060",
        "SOCKS 135.181.203.208:80",
        "SOCKS 157.175.197.28:8819",
        "SOCKS 68.183.90.210:59166",
        "SOCKS 202.40.178.234:1080",
        "SOCKS 98.190.102.62:4145",
        "SOCKS 192.241.156.17:1080",
        "SOCKS 157.230.1.108:14070",
        "SOCKS 91.121.48.221:38711",
        "SOCKS 125.141.139.198:5566",
        "SOCKS 72.10.160.90:1237",
        "SOCKS 51.158.105.107:16379",
        "SOCKS 223.27.82.91:1080",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 20.27.15.111:8561",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}