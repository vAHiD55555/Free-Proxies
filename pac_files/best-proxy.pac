function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 185.244.208.195:23699",
        "SOCKS 172.86.92.68:31337",
        "SOCKS 123.54.197.20:22990",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 205.185.120.241:5556",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 51.195.139.95:44648",
        "SOCKS 46.241.57.29:1080",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 120.224.234.71:7300",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 139.59.225.188:12827",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 185.233.203.191:4555",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 217.144.187.3:1080",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 61.160.66.130:5555",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}