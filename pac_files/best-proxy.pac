function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 110.235.255.252:1080",
        "SOCKS 180.183.97.16:8080",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 176.113.73.99:3128",
        "SOCKS 85.214.244.174:3128",
        "SOCKS 152.53.171.242:28823",
        "SOCKS 123.54.197.53:22054",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 163.5.128.20:14270",
        "SOCKS 200.59.186.178:999",
        "SOCKS 202.62.62.51:1080",
        "SOCKS 47.83.134.196:1024",
        "SOCKS 152.53.171.242:12611",
        "SOCKS 8.219.55.109:1100",
        "SOCKS 163.172.161.35:16379",
        "SOCKS 95.216.17.79:3888",
        "SOCKS 103.54.57.117:50460",
        "SOCKS 185.189.112.133:3128",
        "SOCKS 46.21.153.16:3128",
        "SOCKS 167.172.159.43:39019",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}