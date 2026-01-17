function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.158.105.107:16379",
        "SOCKS 62.60.131.195:8989",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 125.227.225.157:3389",
        "SOCKS 104.248.146.99:3128",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 161.35.82.57:1080",
        "SOCKS 37.120.162.180:11310",
        "SOCKS 128.140.113.110:8081",
        "SOCKS 62.60.131.195:7223",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 37.120.222.132:3128",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 78.12.143.148:20000",
        "SOCKS 68.183.90.210:59166",
        "SOCKS 62.113.119.14:8080",
        "SOCKS 120.77.203.0:443",
        "SOCKS 161.202.226.194:8123",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}