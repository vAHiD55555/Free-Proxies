function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 8.210.4.18:7779",
        "SOCKS 120.77.203.0:443",
        "SOCKS 176.126.103.194:44214",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 80.253.246.238:6618",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 184.95.235.194:1080",
        "SOCKS 135.181.203.208:80",
        "SOCKS 64.227.131.240:1080",
        "SOCKS 203.189.152.142:1080",
        "SOCKS 51.15.133.214:16379",
        "SOCKS 222.129.35.9:57114",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 218.6.105.152:4216",
        "SOCKS 217.76.39.4:1080",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 121.205.213.141:4216",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}