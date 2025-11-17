function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 85.143.254.38:1080",
        "SOCKS 89.58.45.94:25938",
        "SOCKS 167.172.159.43:39019",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 89.58.45.94:24943",
        "SOCKS 176.74.197.163:36918",
        "SOCKS 45.61.139.153:2525",
        "SOCKS 89.58.45.94:11673",
        "SOCKS 89.58.45.94:14949",
        "SOCKS 8.218.99.137:1011",
        "SOCKS 103.143.197.218:8000",
        "SOCKS 205.185.123.62:2555",
        "SOCKS 3.216.60.130:3128",
        "SOCKS 103.174.178.145:2005",
        "SOCKS 195.154.43.198:39522",
        "SOCKS 65.108.159.129:8081",
        "SOCKS 89.58.45.94:20378",
        "SOCKS 125.141.139.112:5566",
        "SOCKS 1.180.0.162:7302",
        "SOCKS 178.33.162.89:58574",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}