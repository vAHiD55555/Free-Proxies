function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 167.172.159.43:39019",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 188.191.164.55:4890",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 36.255.98.164:8199",
        "SOCKS 182.253.123.120:1080",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 104.219.236.127:1080",
        "SOCKS 59.33.33.155:7890",
        "SOCKS 45.166.93.113:999",
        "SOCKS 46.161.6.165:8080",
        "SOCKS 36.255.98.169:9931",
        "SOCKS 98.185.94.76:4145",
        "SOCKS 62.60.131.180:4229",
        "SOCKS 167.172.109.12:37355",
        "SOCKS 118.99.108.4:8080",
        "SOCKS 36.255.98.180:8085",
        "SOCKS 62.60.131.178:8088",
        "SOCKS 36.255.98.180:7406",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}