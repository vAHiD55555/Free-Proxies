function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 218.78.65.202:6688",
        "SOCKS 202.62.50.222:1080",
        "SOCKS 116.242.89.230:3128",
        "SOCKS 177.11.49.41:1088",
        "SOCKS 163.172.161.35:16379",
        "SOCKS 18.141.177.23:80",
        "SOCKS 103.174.178.131:1020",
        "SOCKS 220.128.223.136:8083",
        "SOCKS 104.37.175.200:22292",
        "SOCKS 91.121.48.221:38711",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 103.28.121.58:80",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 84.17.51.241:3128",
        "SOCKS 202.62.55.95:1080",
        "SOCKS 185.123.101.174:3128",
        "SOCKS 103.174.178.137:1020",
        "SOCKS 103.174.178.133:1020",
        "SOCKS 222.71.131.131:1080",
        "SOCKS 193.239.86.247:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}