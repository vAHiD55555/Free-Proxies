function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 98.126.23.24:2846",
        "SOCKS 51.158.68.28:16379",
        "SOCKS 41.223.119.156:3128",
        "SOCKS 8.215.12.103:8085",
        "SOCKS 172.104.240.74:9053",
        "SOCKS 20.210.39.153:8561",
        "SOCKS 92.58.181.171:7575",
        "SOCKS 65.38.213.154:8881",
        "SOCKS 115.221.245.167:1080",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 106.52.2.26:1080",
        "SOCKS 20.27.15.111:8561",
        "SOCKS 51.20.192.194:3128",
        "SOCKS 209.121.164.51:31147",
        "SOCKS 20.27.11.248:8561",
        "SOCKS 69.49.234.59:55781",
        "SOCKS 134.199.159.23:1080",
        "SOCKS 207.244.254.27:7003",
        "SOCKS 168.197.42.74:8082",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}