function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.15.210.79:16379",
        "SOCKS 36.255.98.181:5280",
        "SOCKS 194.58.42.234:1080",
        "SOCKS 62.60.131.183:4201",
        "SOCKS 36.255.98.154:22633",
        "SOCKS 138.201.139.252:12344",
        "SOCKS 36.255.98.161:4040",
        "SOCKS 36.255.98.163:5197",
        "SOCKS 194.163.167.32:1080",
        "SOCKS 79.110.52.252:3128",
        "SOCKS 147.75.34.105:443",
        "SOCKS 204.93.169.232:60755",
        "SOCKS 36.255.98.167:4628",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 185.236.202.170:3128",
        "SOCKS 125.141.139.198:5566",
        "SOCKS 2.144.6.212:12111",
        "SOCKS 62.60.131.182:4228",
        "SOCKS 109.238.14.123:52663",
        "SOCKS 139.180.140.254:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}