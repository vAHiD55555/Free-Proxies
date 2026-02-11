function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 152.53.171.242:31993",
        "SOCKS 123.54.197.19:22006",
        "SOCKS 35.180.188.216:80",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 176.113.73.102:3128",
        "SOCKS 188.130.160.209:80",
        "SOCKS 123.54.197.24:21579",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 174.138.62.182:43715",
        "SOCKS 5.139.120.5:1080",
        "SOCKS 185.236.202.205:3128",
        "SOCKS 85.234.69.183:3128",
        "SOCKS 80.253.246.238:6618",
        "SOCKS 163.172.131.178:16379",
        "SOCKS 67.205.190.164:8080",
        "SOCKS 152.53.171.242:12768",
        "SOCKS 194.163.167.32:1080",
        "SOCKS 20.78.118.91:8561",
        "SOCKS 91.242.229.96:1080",
        "SOCKS 185.61.38.140:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}