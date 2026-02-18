function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 163.5.128.210:14270",
        "SOCKS 61.160.66.130:5555",
        "SOCKS 115.190.91.223:7897",
        "SOCKS 78.135.105.217:50504",
        "SOCKS 185.38.111.1:8080",
        "SOCKS 123.54.197.16:23891",
        "SOCKS 51.158.98.211:16379",
        "SOCKS 200.174.198.32:8888",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 123.54.197.16:23309",
        "SOCKS 85.214.244.174:3128",
        "SOCKS 123.54.197.16:20786",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 13.229.107.106:80",
        "SOCKS 61.178.99.43:7302",
        "SOCKS 185.236.203.208:3128",
        "SOCKS 178.33.162.89:58574",
        "SOCKS 69.164.206.96:13024",
        "SOCKS 51.158.68.133:8811",
        "SOCKS 123.54.197.50:20536",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}