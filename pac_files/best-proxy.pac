function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 157.180.121.252:46206",
        "SOCKS 222.129.36.92:57114",
        "SOCKS 24.249.199.4:4145",
        "SOCKS 140.238.184.182:3128",
        "SOCKS 173.209.63.67:8173",
        "SOCKS 70.36.99.51:3128",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 106.52.187.222:1080",
        "SOCKS 67.43.228.253:13271",
        "SOCKS 44.242.115.206:80",
        "SOCKS 138.68.60.8:1080",
        "SOCKS 72.10.160.172:28327",
        "SOCKS 58.186.92.98:16000",
        "SOCKS 188.166.197.129:3128",
        "SOCKS 98.190.102.62:4145",
        "SOCKS 114.96.218.231:3000",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 67.43.228.254:3333",
        "SOCKS 51.159.159.73:80",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}