function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 67.43.228.250:16043",
        "SOCKS 61.130.151.230:7302",
        "SOCKS 89.58.45.94:11693",
        "SOCKS 20.210.76.104:8561",
        "SOCKS 109.245.231.73:8192",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 67.43.236.19:21023",
        "SOCKS 152.53.36.101:48197",
        "SOCKS 89.58.45.94:15291",
        "SOCKS 103.73.193.133:8080",
        "SOCKS 89.58.45.94:38629",
        "SOCKS 220.128.223.136:8085",
        "SOCKS 157.180.121.252:44193",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 123.128.12.93:9055",
        "SOCKS 103.187.86.14:8085",
        "SOCKS 177.10.202.115:35452",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}