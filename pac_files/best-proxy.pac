function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 67.43.228.250:7015",
        "SOCKS 85.133.240.75:8080",
        "SOCKS 37.120.162.180:42824",
        "SOCKS 222.59.173.105:45227",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 49.0.33.133:27039",
        "SOCKS 209.14.98.6:8080",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 222.129.36.115:57114",
        "SOCKS 40.192.120.122:3128",
        "SOCKS 114.80.36.176:3081",
        "SOCKS 47.251.43.115:33333",
        "SOCKS 152.53.194.46:8029",
        "SOCKS 40.192.69.4:3128",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 67.43.236.20:6231",
        "SOCKS 152.53.168.53:44887",
        "SOCKS 152.53.194.55:21609",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 212.110.188.207:34405",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}