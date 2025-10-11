function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.65.137.218:999",
        "SOCKS 179.57.215.99:999",
        "SOCKS 161.49.116.131:1338",
        "SOCKS 157.10.89.203:8880",
        "SOCKS 98.147.60.146:48678",
        "SOCKS 178.17.62.152:8881",
        "SOCKS 59.153.19.129:19201",
        "SOCKS 18.188.141.177:28080",
        "SOCKS 54.226.156.148:20201",
        "SOCKS 38.194.246.34:999",
        "SOCKS 200.24.146.97:8080",
        "SOCKS 200.85.167.254:8080",
        "SOCKS 45.190.52.24:8080",
        "SOCKS 47.91.115.179:9098",
        "SOCKS 139.59.1.14:1080",
        "SOCKS 62.255.223.195:8080",
        "SOCKS 181.78.49.177:999",
        "SOCKS 131.72.69.209:8080",
        "SOCKS 52.47.164.226:9304",
        "SOCKS 5.78.67.134:8088",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}