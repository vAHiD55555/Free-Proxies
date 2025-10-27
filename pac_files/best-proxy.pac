function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 205.185.114.78:5556",
        "SOCKS 34.16.129.212:3128",
        "SOCKS 98.190.102.40:4145",
        "SOCKS 103.174.178.137:1020",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 98.175.31.222:4145",
        "SOCKS 67.43.228.253:3881",
        "SOCKS 47.97.86.231:8222",
        "SOCKS 115.127.132.225:1080",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 157.175.197.28:8819",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 222.59.173.105:45192",
        "SOCKS 41.223.119.156:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}