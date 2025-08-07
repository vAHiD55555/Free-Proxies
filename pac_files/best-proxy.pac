function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 118.34.4.196:80",
        "SOCKS 173.209.63.70:8192",
        "SOCKS 65.38.213.154:8881",
        "SOCKS 92.58.181.171:7575",
        "SOCKS 192.177.139.23:8000",
        "SOCKS 101.255.103.99:31799",
        "SOCKS 222.129.33.141:57114",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 188.166.104.152:49981",
        "SOCKS 72.10.160.170:3949",
        "SOCKS 3.107.252.199:8099",
        "SOCKS 27.79.215.129:16000",
        "SOCKS 45.174.205.91:999",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 54.215.46.91:20087",
        "SOCKS 152.53.168.53:44887",
        "SOCKS 222.129.36.115:57114",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}