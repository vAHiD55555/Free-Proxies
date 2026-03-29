function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 206.123.156.185:10140",
        "SOCKS 110.235.248.81:1080",
        "SOCKS 38.34.183.130:8452",
        "SOCKS 38.34.179.56:8452",
        "SOCKS 38.145.220.27:8443",
        "SOCKS 193.239.86.249:3128",
        "SOCKS 38.34.179.155:8448",
        "SOCKS 103.28.121.58:80",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 66.42.59.155:443",
        "SOCKS 203.25.208.163:1100",
        "SOCKS 163.172.131.178:16379",
        "SOCKS 103.173.138.153:3125",
        "SOCKS 38.145.218.51:8443",
        "SOCKS 38.34.179.160:8447",
        "SOCKS 205.185.114.78:5556",
        "SOCKS 38.145.208.247:8443",
        "SOCKS 38.145.208.246:8450",
        "SOCKS 45.136.131.28:8447",
        "SOCKS 115.221.242.131:9999",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}