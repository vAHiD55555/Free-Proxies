function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 222.129.32.173:57114",
        "SOCKS 67.210.146.50:11080",
        "SOCKS 159.203.61.169:1080",
        "SOCKS 183.80.22.185:16000",
        "SOCKS 47.252.29.28:11222",
        "SOCKS 209.97.150.167:1080",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 222.129.36.115:57114",
        "SOCKS 152.53.194.55:21609",
        "SOCKS 202.232.52.162:8080",
        "SOCKS 209.141.62.12:5555",
        "SOCKS 67.43.228.250:7015",
        "SOCKS 103.138.123.242:8082",
        "SOCKS 140.143.164.213:1080",
        "SOCKS 222.129.36.92:57114",
        "SOCKS 40.71.46.210:8214",
        "SOCKS 139.59.1.14:1080",
        "SOCKS 72.10.160.91:18749",
        "SOCKS 47.252.81.108:8118",
        "SOCKS 218.64.122.99:7302",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}