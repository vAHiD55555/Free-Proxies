function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 217.173.31.28:1080",
        "SOCKS 125.141.133.49:5566",
        "SOCKS 220.248.188.75:17211",
        "SOCKS 95.84.164.92:8998",
        "SOCKS 89.58.45.94:38785",
        "SOCKS 69.164.206.96:13024",
        "SOCKS 89.58.45.94:32325",
        "SOCKS 89.58.45.94:10038",
        "SOCKS 104.219.236.127:1080",
        "SOCKS 175.24.2.65:1080",
        "SOCKS 120.224.234.71:7300",
        "SOCKS 114.96.218.231:3000",
        "SOCKS 89.58.45.94:38677",
        "SOCKS 204.93.169.232:60755",
        "SOCKS 45.65.137.218:999",
        "SOCKS 176.119.141.228:61080",
        "SOCKS 190.97.254.180:8080",
        "SOCKS 163.223.230.92:59089",
        "SOCKS 125.227.225.157:3389",
        "SOCKS 89.58.45.94:37727",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}