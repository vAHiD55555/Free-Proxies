function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.15.133.214:16379",
        "SOCKS 128.140.113.110:3128",
        "SOCKS 203.189.154.20:1080",
        "SOCKS 219.147.112.150:1080",
        "SOCKS 209.141.58.213:5556",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 185.244.208.195:23699",
        "SOCKS 194.233.78.142:42495",
        "SOCKS 8.219.148.250:1011",
        "SOCKS 205.185.120.241:5556",
        "SOCKS 88.215.162.59:1080",
        "SOCKS 115.127.83.142:1088",
        "SOCKS 128.140.76.145:14954",
        "SOCKS 20.2.144.174:9998",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 203.189.152.49:1080",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 8.148.4.166:17947",
        "SOCKS 51.195.139.95:44648",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}