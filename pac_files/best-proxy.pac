function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 185.189.112.157:3128",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 183.166.132.124:3000",
        "SOCKS 62.60.131.196:4101",
        "SOCKS 36.255.98.175:5182",
        "SOCKS 79.122.230.20:8080",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 121.205.215.44:4216",
        "SOCKS 203.25.208.163:1100",
        "SOCKS 20.210.76.175:8561",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 37.120.222.132:3128",
        "SOCKS 103.28.121.58:3128",
        "SOCKS 62.60.131.188:8888",
        "SOCKS 213.35.110.67:10808",
        "SOCKS 94.184.25.20:242",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 36.255.98.169:45096",
        "SOCKS 20.210.76.104:8561",
        "SOCKS 222.71.131.131:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}