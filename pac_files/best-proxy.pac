function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 189.50.45.46:1995",
        "SOCKS 89.46.249.145:9876",
        "SOCKS 103.143.89.9:1080",
        "SOCKS 47.83.112.49:1080",
        "SOCKS 65.108.159.129:8081",
        "SOCKS 47.91.121.127:8443",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 162.144.74.156:3620",
        "SOCKS 124.248.168.90:1080",
        "SOCKS 128.199.202.122:1080",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 65.109.37.51:8080",
        "SOCKS 36.255.98.160:19088",
        "SOCKS 80.253.246.238:6618",
        "SOCKS 185.244.208.195:23699",
        "SOCKS 222.129.32.173:57114",
        "SOCKS 163.5.128.150:14270",
        "SOCKS 203.189.153.168:1080",
        "SOCKS 188.166.104.152:49981",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}