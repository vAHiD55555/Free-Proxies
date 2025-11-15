function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 72.10.160.92:30375",
        "SOCKS 189.89.154.130:3128",
        "SOCKS 89.58.45.94:16725",
        "SOCKS 138.201.139.252:12344",
        "SOCKS 89.58.45.94:41557",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 223.25.109.114:8199",
        "SOCKS 155.94.163.199:1080",
        "SOCKS 14.241.130.94:1452",
        "SOCKS 222.129.36.92:57114",
        "SOCKS 94.139.182.6:443",
        "SOCKS 47.237.28.20:33333",
        "SOCKS 89.58.45.94:36203",
        "SOCKS 103.191.218.119:8199",
        "SOCKS 167.148.195.58:60002",
        "SOCKS 185.149.240.155:1080",
        "SOCKS 72.10.160.171:23173",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 38.183.144.18:1080",
        "SOCKS 37.221.193.221:18633",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}