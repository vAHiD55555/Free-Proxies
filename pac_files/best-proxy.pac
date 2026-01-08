function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 8.210.4.18:7779",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 202.40.184.54:64564",
        "SOCKS 4.216.195.194:3128",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 193.239.86.248:3128",
        "SOCKS 119.84.215.127:3256",
        "SOCKS 137.184.228.194:40886",
        "SOCKS 194.28.162.12:1080",
        "SOCKS 37.237.225.218:8081",
        "SOCKS 202.62.37.36:1080",
        "SOCKS 167.172.109.12:46249",
        "SOCKS 180.183.97.16:8080",
        "SOCKS 95.216.17.79:3888",
        "SOCKS 163.172.161.35:16379",
        "SOCKS 51.158.98.211:16379",
        "SOCKS 178.170.43.129:8081",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 125.141.139.112:5566",
        "SOCKS 115.127.178.42:2589",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}