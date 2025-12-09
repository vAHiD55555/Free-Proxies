function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 125.141.139.112:5566",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 125.66.165.154:7302",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 185.123.101.174:3128",
        "SOCKS 104.248.158.27:25100",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 51.195.139.95:44648",
        "SOCKS 79.122.230.20:8080",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 31.56.78.170:8181",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 144.91.118.176:3128",
        "SOCKS 115.127.83.142:1088",
        "SOCKS 176.113.73.102:3128",
        "SOCKS 125.141.139.110:5566",
        "SOCKS 223.113.89.138:1080",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 116.242.89.230:3128",
        "SOCKS 194.87.77.22:80",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}