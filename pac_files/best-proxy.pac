function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 152.53.171.242:32023",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 152.53.171.242:10011",
        "SOCKS 103.169.254.75:6080",
        "SOCKS 174.75.211.222:4145",
        "SOCKS 161.35.31.237:1080",
        "SOCKS 212.23.69.121:1080",
        "SOCKS 85.172.55.85:1080",
        "SOCKS 134.199.159.23:1080",
        "SOCKS 218.64.122.99:7302",
        "SOCKS 185.244.208.195:23699",
        "SOCKS 72.10.160.94:6871",
        "SOCKS 152.53.171.242:49879",
        "SOCKS 78.12.249.123:8499",
        "SOCKS 159.223.164.184:20649",
        "SOCKS 159.223.164.184:20838",
        "SOCKS 47.84.42.163:1011",
        "SOCKS 94.233.120.194:1080",
        "SOCKS 72.10.160.91:2473",
        "SOCKS 181.214.39.51:5719",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}