function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 72.221.196.157:35904",
        "SOCKS 172.104.4.144:9050",
        "SOCKS 189.50.45.46:1995",
        "SOCKS 183.166.132.124:3000",
        "SOCKS 43.224.8.116:6667",
        "SOCKS 52.202.30.36:80",
        "SOCKS 185.61.38.140:1080",
        "SOCKS 144.91.78.34:20269",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 117.74.65.207:443",
        "SOCKS 194.87.77.22:80",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 78.63.115.20:8899",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 65.21.89.117:42144",
        "SOCKS 47.88.104.126:3344",
        "SOCKS 124.115.21.11:1080",
        "SOCKS 91.213.99.134:3128",
        "SOCKS 163.172.161.35:16379",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}