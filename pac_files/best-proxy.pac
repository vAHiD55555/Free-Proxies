function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 212.227.186.120:5678",
        "SOCKS 88.215.162.59:1080",
        "SOCKS 186.219.210.255:7080",
        "SOCKS 45.74.31.42:4794",
        "SOCKS 45.74.31.42:4083",
        "SOCKS 45.151.102.251:1081",
        "SOCKS 8.215.12.103:6379",
        "SOCKS 14.207.199.94:8080",
        "SOCKS 110.235.240.223:1080",
        "SOCKS 45.74.31.42:4430",
        "SOCKS 111.92.242.197:1080",
        "SOCKS 141.98.85.49:1080",
        "SOCKS 212.34.144.13:18080",
        "SOCKS 88.80.186.173:19100",
        "SOCKS 103.153.69.111:3128",
        "SOCKS 144.24.47.42:1080",
        "SOCKS 110.235.255.252:1080",
        "SOCKS 45.74.31.30:33165",
        "SOCKS 45.74.31.42:4124",
        "SOCKS 45.74.31.42:4818",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}