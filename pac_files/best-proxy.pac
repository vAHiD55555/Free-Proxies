function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 223.205.127.27:8888",
        "SOCKS 67.210.146.50:11080",
        "SOCKS 188.166.104.152:49981",
        "SOCKS 103.82.134.199:8888",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 191.7.215.165:1452",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 114.99.200.41:3000",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 123.21.21.46:1010",
        "SOCKS 140.143.164.213:1080",
        "SOCKS 116.202.103.223:29210",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 79.127.54.89:3130",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 89.117.145.245:3128",
        "SOCKS 117.68.147.8:3000",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 118.68.172.205:16000",
        "SOCKS 222.129.32.188:57114",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}