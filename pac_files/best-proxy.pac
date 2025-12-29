function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 121.205.213.141:4216",
        "SOCKS 183.166.132.124:3000",
        "SOCKS 115.127.182.138:2589",
        "SOCKS 138.199.25.13:3909",
        "SOCKS 68.183.90.210:59166",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 109.196.140.199:1080",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 205.185.120.241:5556",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 72.214.108.67:4145",
        "SOCKS 202.5.37.104:17382",
        "SOCKS 138.199.25.13:3905",
        "SOCKS 8.215.47.191:10080",
        "SOCKS 193.233.254.7:1080",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 120.92.211.211:7890",
        "SOCKS 103.54.57.117:50460",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}