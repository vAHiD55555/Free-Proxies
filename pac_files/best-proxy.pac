function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 146.235.19.84:10872",
        "SOCKS 159.8.114.37:80",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 68.183.90.210:59166",
        "SOCKS 103.28.121.58:3128",
        "SOCKS 94.182.149.92:2012",
        "SOCKS 167.172.109.12:39452",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 35.234.17.221:8080",
        "SOCKS 114.236.93.203:15800",
        "SOCKS 213.35.110.67:10864",
        "SOCKS 206.189.88.243:8080",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 205.185.116.159:5556",
        "SOCKS 45.88.0.113:3128",
        "SOCKS 176.124.219.49:3128",
        "SOCKS 146.235.19.84:10819",
        "SOCKS 209.38.222.145:8080",
        "SOCKS 91.107.148.58:53967",
        "SOCKS 125.141.139.110:5566",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}