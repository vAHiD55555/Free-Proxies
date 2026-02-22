function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 123.54.197.21:23465",
        "SOCKS 112.86.116.24:1080",
        "SOCKS 207.254.71.62:8088",
        "SOCKS 185.118.51.133:3128",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 52.202.250.102:80",
        "SOCKS 185.189.112.133:3128",
        "SOCKS 91.121.48.221:38711",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 94.100.18.111:3128",
        "SOCKS 194.135.17.31:1080",
        "SOCKS 123.54.197.16:21485",
        "SOCKS 202.152.44.18:8081",
        "SOCKS 202.152.44.19:8081",
        "SOCKS 123.54.197.19:20236",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 193.242.106.191:1080",
        "SOCKS 103.174.178.133:1020",
        "SOCKS 18.233.58.30:80",
        "SOCKS 123.54.197.16:21343",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}