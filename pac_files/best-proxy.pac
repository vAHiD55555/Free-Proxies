function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 36.255.98.167:4156",
        "SOCKS 61.49.87.3:80",
        "SOCKS 62.60.131.182:5799",
        "SOCKS 36.255.98.176:4036",
        "SOCKS 36.7.252.165:3256",
        "SOCKS 88.99.10.252:1080",
        "SOCKS 203.189.135.73:1080",
        "SOCKS 36.255.98.151:5043",
        "SOCKS 36.255.98.151:4180",
        "SOCKS 152.228.212.223:29272",
        "SOCKS 173.236.187.104:40355",
        "SOCKS 103.56.206.77:8099",
        "SOCKS 141.94.104.205:48452",
        "SOCKS 183.164.254.8:4216",
        "SOCKS 65.108.203.35:18080",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 121.42.9.57:7201",
        "SOCKS 36.255.98.168:11730",
        "SOCKS 193.56.255.179:3128",
        "SOCKS 212.34.144.46:58961",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}