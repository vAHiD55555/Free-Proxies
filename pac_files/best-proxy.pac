function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 186.137.21.165:6881",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 8.212.178.171:80",
        "SOCKS 67.205.190.164:8080",
        "SOCKS 202.62.50.222:1080",
        "SOCKS 167.172.159.43:39019",
        "SOCKS 217.173.31.28:1080",
        "SOCKS 167.172.109.12:41491",
        "SOCKS 157.230.1.108:14070",
        "SOCKS 51.158.98.211:16379",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 13.59.97.103:313",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 18.141.177.23:80",
        "SOCKS 34.48.171.130:33080",
        "SOCKS 167.172.109.12:39533",
        "SOCKS 115.127.83.142:1088",
        "SOCKS 51.38.155.24:46069",
        "SOCKS 120.224.234.71:7300",
        "SOCKS 185.189.112.133:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}