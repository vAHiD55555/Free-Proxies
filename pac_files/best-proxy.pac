function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 181.214.39.73:5719",
        "SOCKS 121.40.231.103:7890",
        "SOCKS 62.60.131.186:6924",
        "SOCKS 212.33.248.45:1080",
        "SOCKS 199.68.196.157:10528",
        "SOCKS 218.4.192.62:7302",
        "SOCKS 205.185.126.51:5556",
        "SOCKS 202.62.39.118:1080",
        "SOCKS 94.23.222.122:34392",
        "SOCKS 138.199.25.13:3905",
        "SOCKS 134.122.21.142:33346",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 110.235.248.81:1080",
        "SOCKS 47.251.29.152:1100",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 47.84.131.156:8100",
        "SOCKS 47.243.192.118:6785",
        "SOCKS 8.210.127.178:8100",
        "SOCKS 199.38.85.122:40001",
        "SOCKS 31.211.130.237:8192",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}