function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 123.54.197.49:22802",
        "SOCKS 217.76.245.80:999",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 47.250.56.98:19190",
        "SOCKS 101.91.242.198:6688",
        "SOCKS 120.224.234.71:7300",
        "SOCKS 51.254.81.100:1080",
        "SOCKS 123.54.197.49:23655",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 123.54.197.52:20238",
        "SOCKS 123.54.197.18:22139",
        "SOCKS 194.163.160.97:10808",
        "SOCKS 203.25.208.163:1145",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 85.208.108.43:2094",
        "SOCKS 157.230.1.108:14070",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 185.194.217.97:1080",
        "SOCKS 202.62.50.222:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}