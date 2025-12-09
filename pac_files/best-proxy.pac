function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 95.111.226.235:3128",
        "SOCKS 216.218.249.28:8181",
        "SOCKS 193.34.95.110:8080",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 176.113.73.104:3128",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 185.236.202.170:3128",
        "SOCKS 5.78.67.134:8088",
        "SOCKS 37.120.222.132:3128",
        "SOCKS 77.105.137.42:8080",
        "SOCKS 103.28.121.58:80",
        "SOCKS 84.17.51.241:3128",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 117.74.65.207:443",
        "SOCKS 150.227.4.147:1080",
        "SOCKS 192.252.214.17:4145",
        "SOCKS 193.239.86.247:3128",
        "SOCKS 37.120.140.158:3128",
        "SOCKS 91.121.48.221:38711",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}