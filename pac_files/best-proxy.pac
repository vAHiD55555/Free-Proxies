function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 115.127.83.142:1088",
        "SOCKS 176.74.192.44:24822",
        "SOCKS 20.210.39.153:8561",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 146.56.185.39:10900",
        "SOCKS 178.128.167.129:1080",
        "SOCKS 208.113.222.205:57226",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 36.255.98.169:17501",
        "SOCKS 185.189.112.157:3128",
        "SOCKS 124.115.21.11:1080",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 36.255.98.180:9591",
        "SOCKS 144.91.118.176:3128",
        "SOCKS 167.172.109.12:37355",
        "SOCKS 89.249.65.191:3128",
        "SOCKS 112.98.218.73:57658",
        "SOCKS 37.120.222.132:3128",
        "SOCKS 193.56.255.179:3128",
        "SOCKS 8.210.4.18:7779",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}