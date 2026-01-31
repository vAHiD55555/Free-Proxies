function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 62.60.131.204:4257",
        "SOCKS 62.60.131.204:5000",
        "SOCKS 35.225.22.61:80",
        "SOCKS 178.128.167.129:1080",
        "SOCKS 62.60.131.205:14785",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 46.224.204.97:80",
        "SOCKS 62.60.131.253:5317",
        "SOCKS 213.164.100.31:80",
        "SOCKS 36.255.98.152:8768",
        "SOCKS 176.74.197.163:36918",
        "SOCKS 176.113.73.99:3128",
        "SOCKS 45.77.246.231:80",
        "SOCKS 213.164.100.20:80",
        "SOCKS 213.164.100.15:80",
        "SOCKS 83.221.15.166:8080",
        "SOCKS 36.255.98.165:4201",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}