function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 72.10.164.178:28247",
        "SOCKS 94.182.146.250:8080",
        "SOCKS 42.114.11.180:16000",
        "SOCKS 8.211.200.183:80",
        "SOCKS 8.210.117.141:8888",
        "SOCKS 114.80.39.130:3081",
        "SOCKS 45.63.40.63:80",
        "SOCKS 140.237.14.92:4216",
        "SOCKS 209.97.150.167:1080",
        "SOCKS 42.117.240.41:16000",
        "SOCKS 185.165.118.96:3128",
        "SOCKS 118.68.172.146:16000",
        "SOCKS 183.166.132.124:3000",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 43.130.52.194:8118",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 223.206.41.253:8080",
        "SOCKS 123.56.89.191:1081",
        "SOCKS 159.203.61.169:1080",
        "SOCKS 116.202.103.223:29210",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}