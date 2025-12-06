function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 205.185.114.78:5556",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 49.13.117.67:3128",
        "SOCKS 72.10.160.170:13701",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 20.210.76.178:8561",
        "SOCKS 193.239.86.249:3128",
        "SOCKS 34.225.220.214:80",
        "SOCKS 167.172.109.12:37355",
        "SOCKS 194.233.78.142:42495",
        "SOCKS 113.121.240.114:3256",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 52.201.85.24:80",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 119.81.71.27:80",
        "SOCKS 159.8.114.37:80",
        "SOCKS 115.127.83.142:1088",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}