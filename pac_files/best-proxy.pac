function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.187.38.38:1080",
        "SOCKS 168.138.9.147:1080",
        "SOCKS 45.149.235.243:1081",
        "SOCKS 110.232.86.221:1080",
        "SOCKS 112.28.149.152:8443",
        "SOCKS 204.48.29.137:1088",
        "SOCKS 138.201.36.238:8881",
        "SOCKS 110.83.221.12:1080",
        "SOCKS 155.138.165.60:1081",
        "SOCKS 139.162.91.253:1080",
        "SOCKS 62.133.62.231:1082",
        "SOCKS 169.155.50.87:1080",
        "SOCKS 202.62.52.20:1080",
        "SOCKS 142.248.80.110:1080",
        "SOCKS 202.62.50.222:1080",
        "SOCKS 31.76.225.35:1080",
        "SOCKS 137.66.30.33:1080",
        "SOCKS 193.221.203.192:1080",
        "SOCKS 5.255.113.177:1080",
        "SOCKS 5.75.168.247:8066",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}