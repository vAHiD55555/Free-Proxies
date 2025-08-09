function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 117.161.170.163:9280",
        "SOCKS 5.188.183.253:8080",
        "SOCKS 42.118.0.5:16000",
        "SOCKS 54.215.46.91:20087",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 72.10.160.93:26713",
        "SOCKS 222.129.36.157:57114",
        "SOCKS 188.166.104.152:49981",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 98.185.94.94:4145",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 117.161.170.163:9052",
        "SOCKS 67.43.228.250:7015",
        "SOCKS 67.43.236.18:3927",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 223.25.110.37:8199",
        "SOCKS 173.209.63.68:8037",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 43.224.10.43:6667",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}