function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 193.95.53.131:8077",
        "SOCKS 152.53.36.101:10809",
        "SOCKS 178.128.167.129:1080",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 205.185.126.51:5556",
        "SOCKS 40.192.14.136:9292",
        "SOCKS 20.27.11.248:8561",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 103.155.161.68:443",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 176.74.192.44:24822",
        "SOCKS 180.149.234.73:6214",
        "SOCKS 51.158.98.211:16379",
        "SOCKS 114.80.40.130:3081",
        "SOCKS 51.158.64.130:16379",
        "SOCKS 8.212.151.166:80",
        "SOCKS 152.53.36.101:21445",
        "SOCKS 47.83.207.131:1100",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}