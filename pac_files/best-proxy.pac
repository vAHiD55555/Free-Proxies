function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 185.189.112.157:3128",
        "SOCKS 123.54.197.24:23449",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 119.84.215.127:3256",
        "SOCKS 37.200.67.75:1080",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 123.54.197.24:20689",
        "SOCKS 58.187.104.67:1090",
        "SOCKS 123.54.197.25:21202",
        "SOCKS 27.124.9.21:5555",
        "SOCKS 123.182.233.70:7302",
        "SOCKS 65.108.159.129:8081",
        "SOCKS 103.28.121.58:3128",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 113.121.240.114:3256",
        "SOCKS 123.54.197.19:21750",
        "SOCKS 51.158.124.167:16379",
        "SOCKS 195.154.43.198:39522",
        "SOCKS 222.28.182.229:7890",
        "SOCKS 180.183.97.16:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}