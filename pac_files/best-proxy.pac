function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 36.255.98.184:4032",
        "SOCKS 36.255.98.165:4794",
        "SOCKS 176.113.73.104:3128",
        "SOCKS 36.255.98.167:5338",
        "SOCKS 163.172.131.178:16379",
        "SOCKS 95.111.226.235:3128",
        "SOCKS 36.255.98.180:4150",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 36.255.98.162:4076",
        "SOCKS 52.194.190.212:3128",
        "SOCKS 176.9.238.173:47679",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 62.60.131.185:4157",
        "SOCKS 36.255.98.169:4036",
        "SOCKS 36.255.98.169:4242",
        "SOCKS 183.164.254.8:4216",
        "SOCKS 35.180.188.216:80",
        "SOCKS 36.255.98.151:9500",
        "SOCKS 36.255.98.168:4724",
        "SOCKS 185.112.224.151:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}