function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 8.243.197.200:999",
        "SOCKS 40.192.14.136:9292",
        "SOCKS 144.91.95.238:58237",
        "SOCKS 67.43.236.18:11851",
        "SOCKS 72.221.196.157:35904",
        "SOCKS 47.83.8.7:18080",
        "SOCKS 209.38.222.145:8080",
        "SOCKS 189.50.45.46:1995",
        "SOCKS 173.236.187.104:40355",
        "SOCKS 174.138.61.184:1080",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 207.254.71.62:8088",
        "SOCKS 77.221.141.244:21406",
        "SOCKS 103.35.188.243:3128",
        "SOCKS 152.228.212.223:29272",
        "SOCKS 46.10.208.106:8192",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}