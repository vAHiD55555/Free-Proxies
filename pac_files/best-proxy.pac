function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 85.209.132.156:8000",
        "SOCKS 112.216.54.226:12121",
        "SOCKS 85.193.65.88:8888",
        "SOCKS 117.236.124.166:3128",
        "SOCKS 82.102.11.164:3460",
        "SOCKS 43.135.179.129:7890",
        "SOCKS 165.99.14.18:1111",
        "SOCKS 8.219.97.248:80",
        "SOCKS 34.43.46.91:80",
        "SOCKS 2.144.6.22:9090",
        "SOCKS For more on scraping GitHub and how it may affect your rights, please review our Terms of Service (https://docs.github.com/en/site-policy/github-terms/github-terms-of-service).",
        "SOCKS 103.3.59.208:8080",
        "SOCKS 103.166.158.41:1080",
        "SOCKS 31.187.64.243:10086",
        "SOCKS 95.165.157.102:1081",
        "SOCKS 38.210.179.146:999",
        "SOCKS 159.223.52.199:3128",
        "SOCKS 123.25.25.180:1452",
        "SOCKS 2.56.178.88:808",
        "SOCKS 156.245.246.51:7890",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}