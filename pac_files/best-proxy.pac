function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 54.174.80.244:1080",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 167.172.159.43:39019",
        "SOCKS 152.53.171.242:23158",
        "SOCKS 124.248.164.156:1080",
        "SOCKS 91.121.48.221:38711",
        "SOCKS 152.53.171.242:28683",
        "SOCKS 85.214.94.28:3128",
        "SOCKS 102.0.14.42:1080",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 152.53.171.242:22666",
        "SOCKS 178.128.167.129:1080",
        "SOCKS 193.239.86.247:3128",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 152.53.171.242:22578",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 91.124.98.33:32768",
        "SOCKS 180.183.97.16:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}