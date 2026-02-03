function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 159.8.114.37:80",
        "SOCKS 77.37.244.119:8080",
        "SOCKS 8.130.37.235:3128",
        "SOCKS 119.81.189.194:80",
        "SOCKS 167.249.29.218:999",
        "SOCKS 36.255.98.152:4274",
        "SOCKS 152.228.212.223:29272",
        "SOCKS 37.120.222.132:3128",
        "SOCKS 222.71.131.131:1080",
        "SOCKS 112.209.21.243:8082",
        "SOCKS 116.242.89.230:3128",
        "SOCKS 103.174.178.131:1020",
        "SOCKS 41.223.119.156:3128",
        "SOCKS 119.81.189.194:8123",
        "SOCKS 89.249.65.191:3128",
        "SOCKS 185.189.112.157:3128",
        "SOCKS 178.62.116.7:1080",
        "SOCKS 194.233.78.142:42495",
        "SOCKS 176.113.73.102:3128",
        "SOCKS 78.135.105.217:50504",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}