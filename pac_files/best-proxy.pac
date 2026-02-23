function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 218.4.192.62:7302",
        "SOCKS 134.122.21.142:33346",
        "SOCKS 176.74.192.44:24822",
        "SOCKS 12.156.45.155:3128",
        "SOCKS 169.57.157.146:8123",
        "SOCKS 195.154.43.198:39522",
        "SOCKS 204.93.169.232:60755",
        "SOCKS 68.183.90.210:59166",
        "SOCKS 3.225.78.45:80",
        "SOCKS 193.216.224.108:8192",
        "SOCKS 194.233.78.142:42495",
        "SOCKS 123.54.197.20:21799",
        "SOCKS 61.171.50.169:6688",
        "SOCKS 124.248.191.117:1080",
        "SOCKS 51.15.240.207:16379",
        "SOCKS 195.158.8.123:3128",
        "SOCKS 123.54.197.21:23259",
        "SOCKS 84.17.35.129:3128",
        "SOCKS 123.54.197.16:20317",
        "SOCKS 43.155.156.147:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}