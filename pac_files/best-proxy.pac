function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 119.81.189.194:80",
        "SOCKS 116.203.139.209:3128",
        "SOCKS 39.105.116.150:1733",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 62.60.131.178:6372",
        "SOCKS 176.74.197.163:36918",
        "SOCKS 159.8.114.37:80",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 154.12.41.175:12345",
        "SOCKS 119.81.71.27:80",
        "SOCKS 120.26.104.146:6379",
        "SOCKS 222.129.38.21:57114",
        "SOCKS 121.169.46.116:1090",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 163.172.161.35:16379",
        "SOCKS 157.230.1.108:14070",
        "SOCKS 79.110.52.252:3128",
        "SOCKS 185.123.143.247:3128",
        "SOCKS 193.34.95.110:8080",
        "SOCKS 51.89.68.78:9050",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}