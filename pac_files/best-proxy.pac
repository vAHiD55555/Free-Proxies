function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 205.185.114.78:5556",
        "SOCKS 47.83.159.53:1122",
        "SOCKS 167.172.109.12:40825",
        "SOCKS 51.158.98.211:16379",
        "SOCKS 62.60.131.194:4787",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 47.119.22.156:8081",
        "SOCKS 119.81.71.27:8123",
        "SOCKS 106.45.221.168:3256",
        "SOCKS 103.28.121.58:80",
        "SOCKS 157.10.135.73:1080",
        "SOCKS 222.71.131.131:1080",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 8.130.90.177:3128",
        "SOCKS 8.130.37.235:3128",
        "SOCKS 192.145.31.78:8080",
        "SOCKS 176.115.139.141:1080",
        "SOCKS 120.26.104.146:8085",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 193.56.255.181:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}