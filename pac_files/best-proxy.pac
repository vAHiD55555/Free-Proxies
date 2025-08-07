function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 222.129.36.92:57114",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 27.153.141.90:4216",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 152.53.168.53:44887",
        "SOCKS 72.10.160.91:18749",
        "SOCKS 103.109.57.42:3629",
        "SOCKS 38.54.9.151:8080",
        "SOCKS 45.59.117.2:8080",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 159.65.69.186:9200",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 144.76.159.121:8080",
        "SOCKS 188.165.233.121:9151",
        "SOCKS 27.79.237.228:16000",
        "SOCKS 45.230.170.30:999",
        "SOCKS 176.126.103.194:44214",
        "SOCKS 121.205.213.141:4216",
        "SOCKS 152.53.194.55:21609",
        "SOCKS 134.209.29.120:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}