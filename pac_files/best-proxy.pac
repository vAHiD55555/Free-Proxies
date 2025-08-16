function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 188.166.104.152:49981",
        "SOCKS 67.43.228.252:21045",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 42.118.3.68:16000",
        "SOCKS 72.10.160.174:21931",
        "SOCKS 174.64.199.79:4145",
        "SOCKS 85.133.240.75:8080",
        "SOCKS 152.53.168.53:44887",
        "SOCKS 121.205.215.44:4216",
        "SOCKS 27.79.174.20:16000",
        "SOCKS 72.10.160.172:28327",
        "SOCKS 67.43.228.253:13271",
        "SOCKS 140.143.164.213:1080",
        "SOCKS 121.205.213.141:4216",
        "SOCKS 186.148.178.195:999",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 152.53.194.55:21609",
        "SOCKS 43.131.9.114:1777",
        "SOCKS 91.200.163.190:8088",
        "SOCKS 195.158.8.123:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}