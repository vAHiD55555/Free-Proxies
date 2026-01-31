function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 36.255.98.168:6956",
        "SOCKS 103.105.76.19:8080",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 36.255.98.169:4938",
        "SOCKS 62.60.131.203:11286",
        "SOCKS 36.255.98.169:4135",
        "SOCKS 36.255.98.163:4439",
        "SOCKS 103.118.175.107:8080",
        "SOCKS 62.60.131.203:4054",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 62.60.131.193:33611",
        "SOCKS 134.122.21.142:33346",
        "SOCKS 36.255.98.169:11654",
        "SOCKS 185.112.224.151:1080",
        "SOCKS 161.202.226.194:8123",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 62.60.131.204:5280",
        "SOCKS 36.255.98.167:7773",
        "SOCKS 115.127.62.50:1088",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}