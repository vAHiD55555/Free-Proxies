function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 27.79.132.13:16000",
        "SOCKS 31.14.114.66:1081",
        "SOCKS 222.129.36.92:57114",
        "SOCKS 67.43.228.250:7015",
        "SOCKS 219.147.112.150:1080",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 40.71.46.210:8214",
        "SOCKS 184.178.172.5:15303",
        "SOCKS 47.74.46.81:11310",
        "SOCKS 49.156.44.115:8080",
        "SOCKS 52.193.148.177:9551",
        "SOCKS 67.43.228.251:28401",
        "SOCKS 72.10.160.93:26713",
        "SOCKS 116.202.103.223:29210",
        "SOCKS 173.209.63.68:8047",
        "SOCKS 117.74.65.207:443",
        "SOCKS 72.10.160.173:19329",
        "SOCKS 24.249.199.4:4145",
        "SOCKS 40.192.27.104:8080",
        "SOCKS 20.41.240.154:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}