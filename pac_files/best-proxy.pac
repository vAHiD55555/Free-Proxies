function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 190.6.54.12:6969",
        "SOCKS 115.127.83.142:1088",
        "SOCKS 185.189.112.133:3128",
        "SOCKS 119.81.71.27:80",
        "SOCKS 185.236.202.205:3128",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 15.207.196.77:3128",
        "SOCKS 14.241.80.37:8080",
        "SOCKS 3.137.32.100:80",
        "SOCKS 185.125.23.109:8899",
        "SOCKS 176.113.73.102:3128",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 5.181.178.94:8080",
        "SOCKS 193.239.86.249:3128",
        "SOCKS 72.10.160.174:10301",
        "SOCKS 150.227.4.147:1080",
        "SOCKS 46.21.153.16:3128",
        "SOCKS 185.236.202.170:3128",
        "SOCKS 205.185.114.78:5556",
        "SOCKS 51.15.210.79:16379",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}