function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 185.6.9.176:8072",
        "SOCKS 51.15.133.214:16379",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 61.130.151.230:7302",
        "SOCKS 222.129.38.21:57114",
        "SOCKS 104.248.59.38:80",
        "SOCKS 213.35.110.67:10800",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 176.74.192.44:24822",
        "SOCKS 193.242.106.191:1080",
        "SOCKS 159.65.230.91:20924",
        "SOCKS 195.90.215.186:3443",
        "SOCKS 159.65.230.91:20461",
        "SOCKS 46.21.153.16:3128",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 84.17.35.129:3128",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 206.189.130.107:8080",
        "SOCKS 31.211.130.237:8192",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}