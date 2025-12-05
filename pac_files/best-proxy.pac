function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 113.100.209.184:3128",
        "SOCKS 106.45.221.168:3256",
        "SOCKS 167.172.109.12:37355",
        "SOCKS 18.141.177.23:80",
        "SOCKS 185.189.112.157:3128",
        "SOCKS 103.114.53.2:8080",
        "SOCKS 103.242.175.241:8899",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 139.162.78.109:1080",
        "SOCKS 171.238.88.218:1088",
        "SOCKS 177.234.194.30:999",
        "SOCKS 216.229.112.25:8080",
        "SOCKS 185.189.112.133:3128",
        "SOCKS 103.28.121.58:3128",
        "SOCKS 171.238.91.139:1092",
        "SOCKS 104.37.175.200:22292",
        "SOCKS 103.86.131.62:80",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 180.183.97.16:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}