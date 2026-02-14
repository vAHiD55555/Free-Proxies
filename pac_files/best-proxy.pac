function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 37.120.222.132:3128",
        "SOCKS 193.239.86.249:3128",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 79.122.230.20:8080",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 220.128.223.136:8088",
        "SOCKS 123.54.197.51:21149",
        "SOCKS 123.54.197.20:22358",
        "SOCKS 103.242.175.241:8899",
        "SOCKS 123.54.197.24:22554",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 185.189.112.133:3128",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 152.32.213.178:1080",
        "SOCKS 123.54.197.51:22042",
        "SOCKS 149.129.226.9:194",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 47.252.11.233:14186",
        "SOCKS 185.236.202.205:3128",
        "SOCKS 8.210.4.18:7779",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}