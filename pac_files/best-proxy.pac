function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.15.133.214:16379",
        "SOCKS 94.131.82.71:10800",
        "SOCKS 222.71.131.131:1080",
        "SOCKS 125.141.139.112:5566",
        "SOCKS 115.127.178.226:2026",
        "SOCKS 128.140.76.145:29696",
        "SOCKS 51.84.65.10:1081",
        "SOCKS 149.202.75.85:36666",
        "SOCKS 128.140.76.145:13233",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 205.185.126.51:5556",
        "SOCKS 204.93.169.232:60755",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 3.35.14.139:1080",
        "SOCKS 68.183.180.48:8080",
        "SOCKS 34.216.224.9:40715",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 39.170.85.129:7302",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}