function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 159.65.69.186:9200",
        "SOCKS 124.115.21.11:1080",
        "SOCKS 113.128.33.60:53405",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 178.128.167.129:1080",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 163.172.161.35:16379",
        "SOCKS 167.172.159.43:39019",
        "SOCKS 222.71.131.131:1080",
        "SOCKS 203.25.208.163:1111",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 66.201.5.0:3128",
        "SOCKS 39.170.85.129:7302",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 165.227.104.122:48500",
        "SOCKS 47.237.70.144:1011",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 103.174.178.137:1020",
        "SOCKS 101.91.242.198:6688",
        "SOCKS 140.143.164.213:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}