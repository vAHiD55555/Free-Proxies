function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 62.60.131.191:5064",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 195.154.43.198:39522",
        "SOCKS 62.60.131.191:8711",
        "SOCKS 115.127.106.226:1088",
        "SOCKS 13.231.159.110:29799",
        "SOCKS 217.173.31.28:1080",
        "SOCKS 62.60.131.186:8939",
        "SOCKS 20.2.144.174:9998",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 103.242.175.241:8899",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 51.158.105.107:16379",
        "SOCKS 222.59.173.105:44139",
        "SOCKS 173.212.197.244:10801",
        "SOCKS 222.129.32.173:57114",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}