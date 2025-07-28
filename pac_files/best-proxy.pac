function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 78.63.115.20:8899",
        "SOCKS 47.243.75.202:58854",
        "SOCKS 115.221.245.167:1080",
        "SOCKS 165.227.174.249:33080",
        "SOCKS 37.120.162.180:42824",
        "SOCKS 72.10.160.170:3949",
        "SOCKS 159.203.61.169:1080",
        "SOCKS 152.53.168.53:44887",
        "SOCKS 174.64.199.79:4145",
        "SOCKS 135.181.203.208:80",
        "SOCKS 222.129.36.157:57114",
        "SOCKS 51.158.65.148:16379",
        "SOCKS 98.152.200.61:8081",
        "SOCKS 74.81.46.242:60007",
        "SOCKS 34.166.117.165:1080",
        "SOCKS 34.131.85.161:3128",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 8.243.67.190:8080",
        "SOCKS 117.74.65.207:443",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}