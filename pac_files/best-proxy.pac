function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 114.236.93.203:15800",
        "SOCKS 196.216.134.71:8865",
        "SOCKS 185.93.89.183:11682",
        "SOCKS 134.122.21.142:33346",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 69.164.206.96:13024",
        "SOCKS 34.216.224.9:40715",
        "SOCKS 185.93.89.147:5000",
        "SOCKS 72.221.196.157:35904",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 181.214.39.51:5719",
        "SOCKS 185.93.89.183:9187",
        "SOCKS 61.130.151.230:7302",
        "SOCKS 103.126.87.160:8088",
        "SOCKS 34.222.65.100:1976",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 51.20.192.194:15311",
        "SOCKS 205.185.114.78:5556",
        "SOCKS 209.38.83.56:1088",
        "SOCKS 144.91.78.34:20269",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}