function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 95.78.118.172:1080",
        "SOCKS 103.28.121.58:3128",
        "SOCKS 141.0.9.176:80",
        "SOCKS 66.135.227.178:4145",
        "SOCKS 61.72.221.94:3128",
        "SOCKS 121.206.205.75:4216",
        "SOCKS 134.122.21.142:33346",
        "SOCKS 206.123.156.209:4011",
        "SOCKS 206.123.156.184:5642",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 18.141.177.23:80",
        "SOCKS 204.199.140.28:999",
        "SOCKS 146.235.19.84:10805",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 3.24.178.81:80",
        "SOCKS 113.59.32.141:22222",
        "SOCKS 103.104.99.89:80",
        "SOCKS 222.71.131.131:1080",
        "SOCKS 185.61.38.140:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}