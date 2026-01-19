function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 15.207.196.77:3128",
        "SOCKS 67.43.236.18:32917",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 223.113.89.138:1080",
        "SOCKS 8.222.151.218:5566",
        "SOCKS 193.239.86.248:3128",
        "SOCKS 139.180.140.254:1080",
        "SOCKS 14.143.222.113:10179",
        "SOCKS 159.8.114.37:80",
        "SOCKS 152.53.171.242:16894",
        "SOCKS 37.120.162.180:12032",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 37.120.162.180:33655",
        "SOCKS 84.17.51.240:3128",
        "SOCKS 36.255.98.167:9112",
        "SOCKS 103.127.99.99:1080",
        "SOCKS 51.158.68.68:8811",
        "SOCKS 152.53.171.242:48303",
        "SOCKS 103.163.244.106:1080",
        "SOCKS 37.120.162.180:26888",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}