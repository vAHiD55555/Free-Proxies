function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 61.72.221.134:3128",
        "SOCKS 173.212.237.43:43648",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 103.195.5.78:30091",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 84.17.51.235:3128",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 169.57.157.146:8123",
        "SOCKS 103.28.121.58:80",
        "SOCKS 113.100.209.184:3128",
        "SOCKS 134.122.21.142:33346",
        "SOCKS 161.202.226.194:8123",
        "SOCKS 5.255.117.250:1080",
        "SOCKS 159.223.53.194:1080",
        "SOCKS 159.65.230.91:20537",
        "SOCKS 51.15.240.207:16379",
        "SOCKS 5.255.99.75:1080",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 18.141.177.23:80",
        "SOCKS 113.121.240.114:3256",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}