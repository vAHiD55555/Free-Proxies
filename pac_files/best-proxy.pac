function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.242.175.241:8899",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 89.58.45.94:27117",
        "SOCKS 125.227.225.157:3389",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 138.201.139.252:12344",
        "SOCKS 160.25.8.141:11011",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 152.53.171.242:17707",
        "SOCKS 89.58.45.94:40437",
        "SOCKS 222.71.131.131:1080",
        "SOCKS 125.141.139.110:5566",
        "SOCKS 89.58.45.94:53471",
        "SOCKS 103.189.218.83:6969",
        "SOCKS 104.248.158.27:25100",
        "SOCKS 115.127.107.106:1080",
        "SOCKS 38.183.144.18:1080",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 61.171.50.169:6688",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}