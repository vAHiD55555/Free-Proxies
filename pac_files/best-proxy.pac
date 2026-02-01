function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 36.255.98.154:4394",
        "SOCKS 51.89.68.78:9050",
        "SOCKS 198.177.253.13:4145",
        "SOCKS 169.57.157.148:80",
        "SOCKS 36.255.98.153:8070",
        "SOCKS 77.221.141.244:21406",
        "SOCKS 149.202.75.85:36666",
        "SOCKS 62.60.131.194:4673",
        "SOCKS 193.239.86.248:3128",
        "SOCKS 62.60.131.180:26422",
        "SOCKS 36.255.98.154:4215",
        "SOCKS 222.71.131.131:1080",
        "SOCKS 121.206.205.75:4216",
        "SOCKS 36.255.98.154:4375",
        "SOCKS 103.28.121.58:3128",
        "SOCKS 62.60.131.194:5415",
        "SOCKS 36.255.98.152:4006",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 176.113.73.102:3128",
        "SOCKS 36.255.98.154:4361",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}