function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 125.87.82.86:3256",
        "SOCKS 104.248.59.38:80",
        "SOCKS 83.239.34.82:8080",
        "SOCKS 113.195.224.222:9999",
        "SOCKS 181.214.39.73:5719",
        "SOCKS 120.224.234.71:7300",
        "SOCKS 115.127.106.226:1088",
        "SOCKS 131.100.19.5:4321",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 94.31.176.234:10808",
        "SOCKS 204.93.169.232:60755",
        "SOCKS 104.248.146.99:3128",
        "SOCKS 223.113.89.138:1080",
        "SOCKS 143.110.217.153:1080",
        "SOCKS 137.184.228.194:40886",
        "SOCKS 62.60.231.71:56608",
        "SOCKS 152.32.130.144:1080",
        "SOCKS 114.236.93.203:15800",
        "SOCKS 40.192.14.136:9292",
        "SOCKS 51.195.139.95:44648",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}