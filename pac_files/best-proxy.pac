function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 185.236.202.205:3128",
        "SOCKS 171.238.102.99:1068",
        "SOCKS 152.42.229.196:3128",
        "SOCKS 217.174.106.15:8118",
        "SOCKS 114.236.93.203:15800",
        "SOCKS 72.10.160.170:13701",
        "SOCKS 171.238.103.65:1030",
        "SOCKS 194.87.77.22:80",
        "SOCKS 193.239.86.248:3128",
        "SOCKS 36.88.111.98:55443",
        "SOCKS 103.114.53.2:8080",
        "SOCKS 217.172.122.14:8080",
        "SOCKS 205.185.120.241:5556",
        "SOCKS 37.192.133.82:1080",
        "SOCKS 180.183.97.16:8080",
        "SOCKS 88.99.10.252:1080",
        "SOCKS 51.195.139.95:44648",
        "SOCKS 120.224.234.71:7300",
        "SOCKS 103.242.175.241:8899",
        "SOCKS 222.129.38.21:57114",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}