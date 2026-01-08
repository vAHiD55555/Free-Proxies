function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 31.43.194.184:1080",
        "SOCKS 185.38.111.1:8080",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 72.10.160.91:9607",
        "SOCKS 185.112.224.151:1080",
        "SOCKS 103.28.121.58:80",
        "SOCKS 72.10.164.178:2493",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 103.174.178.133:1020",
        "SOCKS 152.228.212.223:29272",
        "SOCKS 159.8.114.37:80",
        "SOCKS 5.255.117.127:1080",
        "SOCKS 103.30.29.49:1080",
        "SOCKS 194.163.182.6:1080",
        "SOCKS 58.147.190.5:8799",
        "SOCKS 167.172.109.12:39452",
        "SOCKS 91.213.99.134:3128",
        "SOCKS 110.235.246.243:1080",
        "SOCKS 35.180.188.216:80",
        "SOCKS 67.43.228.254:2447",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}