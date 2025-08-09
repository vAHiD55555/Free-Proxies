function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 222.129.33.141:57114",
        "SOCKS 67.43.236.22:29979",
        "SOCKS 185.93.89.145:4051",
        "SOCKS 212.110.188.195:34411",
        "SOCKS 45.134.15.205:1080",
        "SOCKS 157.180.121.252:46206",
        "SOCKS 1.54.82.250:16000",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 89.169.37.76:3128",
        "SOCKS 98.190.102.40:4145",
        "SOCKS 159.89.98.131:3128",
        "SOCKS 222.129.37.77:57114",
        "SOCKS 222.129.36.157:57114",
        "SOCKS 152.32.68.171:65535",
        "SOCKS 27.79.134.247:16000",
        "SOCKS 202.232.52.162:8080",
        "SOCKS 152.53.194.55:21609",
        "SOCKS 72.10.160.92:3709",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 173.209.63.69:8111",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}