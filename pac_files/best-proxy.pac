function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 185.61.38.140:1080",
        "SOCKS 36.255.98.178:4295",
        "SOCKS 106.45.221.168:3256",
        "SOCKS 36.255.98.165:5005",
        "SOCKS 115.127.106.226:1088",
        "SOCKS 62.60.131.191:11269",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 103.35.188.243:3128",
        "SOCKS 213.35.110.67:10800",
        "SOCKS 62.60.131.185:6936",
        "SOCKS 36.255.98.160:4347",
        "SOCKS 62.60.131.253:4163",
        "SOCKS 36.255.98.167:5842",
        "SOCKS 62.60.131.203:11213",
        "SOCKS 8.222.177.144:1100",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 62.60.131.204:10608",
        "SOCKS 103.147.246.77:8199",
        "SOCKS 36.255.98.169:4031",
        "SOCKS 62.60.131.204:5454",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}