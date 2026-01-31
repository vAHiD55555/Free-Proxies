function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 36.255.98.167:4504",
        "SOCKS 202.152.44.19:8081",
        "SOCKS 160.238.122.200:8080",
        "SOCKS 36.255.98.180:4187",
        "SOCKS 23.108.27.158:80",
        "SOCKS 5.255.117.127:1080",
        "SOCKS 216.229.112.25:8080",
        "SOCKS 62.60.131.253:5427",
        "SOCKS 62.60.131.178:9080",
        "SOCKS 204.93.169.232:60755",
        "SOCKS 194.163.167.32:1080",
        "SOCKS 51.75.126.150:57328",
        "SOCKS 62.60.131.203:4359",
        "SOCKS 62.60.131.204:4104",
        "SOCKS 36.255.98.181:5411",
        "SOCKS 36.255.98.161:13570",
        "SOCKS 36.255.98.161:4359",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 85.209.129.228:55555",
        "SOCKS 1.33.246.75:8080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}