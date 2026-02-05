function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 113.121.240.114:3256",
        "SOCKS 194.163.182.6:1080",
        "SOCKS 222.129.38.21:57114",
        "SOCKS 183.164.254.8:4216",
        "SOCKS 123.54.197.19:22074",
        "SOCKS 84.17.51.235:3128",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 94.31.176.234:10808",
        "SOCKS 38.187.7.6:3128",
        "SOCKS 146.235.19.84:10819",
        "SOCKS 185.236.202.205:3128",
        "SOCKS 5.255.113.177:1080",
        "SOCKS 80.253.246.238:6618",
        "SOCKS 138.201.139.252:12344",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 192.252.216.86:4145",
        "SOCKS 103.174.178.131:1020",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 144.91.78.34:20269",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}