function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 61.130.151.230:7302",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 147.75.34.92:9443",
        "SOCKS 205.185.120.241:5556",
        "SOCKS 222.129.32.173:57114",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 159.223.63.150:3128",
        "SOCKS 117.74.65.207:80",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 98.190.102.40:4145",
        "SOCKS 54.215.46.91:20087",
        "SOCKS 104.248.158.27:25100",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 47.97.86.231:8222",
        "SOCKS 72.10.160.171:23173",
        "SOCKS 115.127.106.226:1088",
        "SOCKS 176.74.197.163:36918",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 205.185.126.51:5556",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}