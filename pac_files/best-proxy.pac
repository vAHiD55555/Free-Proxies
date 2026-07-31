function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 89.19.214.171:1080",
        "SOCKS 168.253.92.93:10808",
        "SOCKS 218.68.173.211:1081",
        "SOCKS 131.153.1.44:8254",
        "SOCKS 89.169.168.25:6101",
        "SOCKS 178.250.156.112:443",
        "SOCKS 77.245.76.107:1080",
        "SOCKS 89.124.88.189:8881",
        "SOCKS 149.18.81.114:7890",
        "SOCKS 112.28.149.156:8443",
        "SOCKS 5.202.120.123:3128",
        "SOCKS 84.54.217.219:1080",
        "SOCKS 123.58.219.171:10808",
        "SOCKS 101.36.104.239:10808",
        "SOCKS 217.64.30.216:3128",
        "SOCKS 31.43.194.184:1080",
        "SOCKS 77.110.118.207:1080",
        "SOCKS 45.76.13.121:49995",
        "SOCKS 217.12.209.4:1080",
        "SOCKS 212.58.132.5:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}