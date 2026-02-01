function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 115.190.91.223:7897",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 62.60.131.194:4351",
        "SOCKS 125.141.133.98:5566",
        "SOCKS 36.255.98.178:7087",
        "SOCKS 36.255.98.164:11716",
        "SOCKS 62.60.131.183:5122",
        "SOCKS 221.202.27.194:10806",
        "SOCKS 152.53.171.242:17323",
        "SOCKS 62.60.131.182:9998",
        "SOCKS 176.74.192.44:24822",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 47.243.94.125:1080",
        "SOCKS 119.81.71.27:80",
        "SOCKS 89.46.249.170:8070",
        "SOCKS 85.133.227.182:80",
        "SOCKS 36.255.98.161:4535",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 62.60.131.186:4117",
        "SOCKS 39.170.85.129:7302",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}