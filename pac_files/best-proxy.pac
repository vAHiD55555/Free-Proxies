function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 194.67.111.148:1080",
        "SOCKS 5.255.117.127:1080",
        "SOCKS 13.140.164.179:3532",
        "SOCKS 191.44.118.236:1080",
        "SOCKS 146.235.231.249:1080",
        "SOCKS 119.148.20.109:22122",
        "SOCKS 203.25.208.163:1145",
        "SOCKS 45.194.33.12:30001",
        "SOCKS 13.140.164.179:3504",
        "SOCKS 216.106.179.216:49213",
        "SOCKS 171.253.95.3:1081",
        "SOCKS 112.28.149.152:8443",
        "SOCKS 47.250.211.53:1080",
        "SOCKS 163.61.112.243:8080",
        "SOCKS 154.219.116.178:1080",
        "SOCKS 144.91.111.48:1088",
        "SOCKS 139.59.122.219:9050",
        "SOCKS 45.144.54.40:1080",
        "SOCKS 47.81.56.193:8888",
        "SOCKS 49.87.220.137:8989",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}