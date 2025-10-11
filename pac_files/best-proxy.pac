function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 72.10.164.178:2493",
        "SOCKS 176.119.16.40:8534",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 177.234.194.30:999",
        "SOCKS 101.255.107.181:8090",
        "SOCKS 46.43.72.25:8080",
        "SOCKS 188.166.230.109:31028",
        "SOCKS 138.124.49.149:10808",
        "SOCKS 182.160.105.46:14157",
        "SOCKS 135.181.203.208:80",
        "SOCKS 178.17.62.152:8881",
        "SOCKS 103.169.26.114:8080",
        "SOCKS 183.164.226.253:4216",
        "SOCKS 103.82.20.126:8888",
        "SOCKS 67.43.236.18:3927",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 219.147.112.150:1080",
        "SOCKS 123.56.89.191:1081",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}