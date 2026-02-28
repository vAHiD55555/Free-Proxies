function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 81.12.119.171:8080",
        "SOCKS 13.229.47.109:80",
        "SOCKS 159.65.230.91:20652",
        "SOCKS 192.241.156.17:1080",
        "SOCKS 123.253.21.217:1080",
        "SOCKS 51.195.139.95:44648",
        "SOCKS 159.65.230.91:20188",
        "SOCKS 185.65.202.186:1080",
        "SOCKS 176.113.73.99:3128",
        "SOCKS 159.65.230.91:20699",
        "SOCKS 125.128.12.24:3128",
        "SOCKS 159.65.230.91:20518",
        "SOCKS 159.65.230.91:20482",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 202.62.50.222:1080",
        "SOCKS 47.236.20.209:1145",
        "SOCKS 20.27.15.111:8561",
        "SOCKS 159.65.230.91:20240",
        "SOCKS 85.214.94.28:3128",
        "SOCKS 178.156.224.42:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}