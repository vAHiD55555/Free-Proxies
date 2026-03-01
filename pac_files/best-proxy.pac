function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 121.128.121.144:3128",
        "SOCKS 159.65.230.91:20547",
        "SOCKS 103.174.178.137:1020",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 61.72.221.134:3128",
        "SOCKS 173.249.5.133:1080",
        "SOCKS 62.113.119.14:8080",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 213.35.110.67:10900",
        "SOCKS 159.65.230.91:20067",
        "SOCKS 206.123.156.254:4145",
        "SOCKS 101.91.242.198:6688",
        "SOCKS 81.211.73.243:1080",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 139.59.225.188:12827",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 121.128.121.124:3128",
        "SOCKS 85.208.108.43:2094",
        "SOCKS 212.34.135.86:5000",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}