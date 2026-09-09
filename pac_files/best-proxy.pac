function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 43.160.225.102:2000",
        "SOCKS 138.199.25.13:3902",
        "SOCKS 47.76.175.249:1080",
        "SOCKS 178.237.185.114:1080",
        "SOCKS 110.235.246.62:1080",
        "SOCKS 174.138.162.38:9050",
        "SOCKS 111.119.162.248:10981",
        "SOCKS 8.215.25.3:2080",
        "SOCKS 5.129.228.92:443",
        "SOCKS 92.205.186.129:1080",
        "SOCKS 70.166.65.160:4145",
        "SOCKS 65.21.252.66:10809",
        "SOCKS 103.118.85.144:1080",
        "SOCKS 62.148.236.156:10808",
        "SOCKS 194.163.182.6:1080",
        "SOCKS 119.167.25.224:1081",
        "SOCKS 172.232.139.214:32768",
        "SOCKS 195.2.70.127:9050",
        "SOCKS 74.113.234.144:1080",
        "SOCKS 78.142.61.76:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}