function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 159.65.230.91:20330",
        "SOCKS 137.184.228.194:40886",
        "SOCKS 51.158.64.130:16379",
        "SOCKS 154.17.27.79:21266",
        "SOCKS 51.158.124.167:16379",
        "SOCKS 79.122.230.20:8080",
        "SOCKS 13.229.47.109:80",
        "SOCKS 193.239.86.249:3128",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 115.221.242.131:9999",
        "SOCKS 193.56.255.179:3128",
        "SOCKS 18.141.177.23:80",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 35.180.188.216:80",
        "SOCKS 43.134.142.243:1080",
        "SOCKS 159.65.230.91:20344",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 1.225.116.115:1080",
        "SOCKS 139.59.7.217:36590",
        "SOCKS 165.154.162.230:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}