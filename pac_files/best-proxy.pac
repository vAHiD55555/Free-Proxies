function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 113.192.3.230:1452",
        "SOCKS 124.115.21.11:1080",
        "SOCKS 152.32.68.171:65535",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 114.96.218.231:3000",
        "SOCKS 72.10.160.173:19329",
        "SOCKS 115.72.42.187:10001",
        "SOCKS 36.93.8.34:11000",
        "SOCKS 209.97.150.167:1080",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 188.120.245.247:12432",
        "SOCKS 61.29.96.146:8000",
        "SOCKS 49.49.93.226:8888",
        "SOCKS 185.13.230.210:8082",
        "SOCKS 51.159.107.202:8118",
        "SOCKS 34.124.190.108:8090",
        "SOCKS 54.215.46.91:20087",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 206.189.140.195:3128",
        "SOCKS 154.72.204.78:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}