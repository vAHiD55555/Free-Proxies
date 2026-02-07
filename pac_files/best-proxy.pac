function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 176.74.192.44:24822",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 176.74.197.163:36918",
        "SOCKS 13.229.47.109:80",
        "SOCKS 185.233.202.217:5858",
        "SOCKS 139.180.140.254:1080",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 36.91.115.133:80",
        "SOCKS 85.214.244.174:3128",
        "SOCKS 116.242.89.230:3128",
        "SOCKS 204.93.169.232:60755",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 152.53.171.242:10001",
        "SOCKS 207.180.228.55:80",
        "SOCKS 152.53.171.242:12251",
        "SOCKS 174.138.61.184:1080",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 104.248.59.38:80",
        "SOCKS 203.177.237.153:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}