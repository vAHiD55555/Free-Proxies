function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 167.172.159.43:39019",
        "SOCKS 67.43.228.253:3881",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 45.136.198.40:3128",
        "SOCKS 152.53.36.101:10061",
        "SOCKS 152.53.171.242:27243",
        "SOCKS 47.84.183.157:33333",
        "SOCKS 47.239.10.198:1111",
        "SOCKS 37.221.193.221:11165",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 37.221.193.221:26844",
        "SOCKS 152.53.36.101:28283",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 152.53.171.242:39989",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 14.225.240.23:8562",
        "SOCKS 152.53.36.101:24619",
        "SOCKS 67.43.228.250:16043",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}