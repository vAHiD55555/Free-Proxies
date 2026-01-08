function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 193.239.86.247:3128",
        "SOCKS 161.202.226.194:8123",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 37.120.140.158:3128",
        "SOCKS 31.43.194.184:1080",
        "SOCKS 37.120.133.137:3128",
        "SOCKS 202.62.59.216:1080",
        "SOCKS 104.37.175.200:22292",
        "SOCKS 167.99.171.156:443",
        "SOCKS 40.177.106.156:8080",
        "SOCKS 193.233.254.9:1080",
        "SOCKS 54.90.159.174:22229",
        "SOCKS 107.219.228.250:7777",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 223.113.89.138:1080",
        "SOCKS 102.217.190.157:7080",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 104.248.158.27:25100",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 84.17.35.129:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}