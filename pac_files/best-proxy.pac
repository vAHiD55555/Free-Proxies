function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 103.54.57.117:50460",
        "SOCKS 195.93.173.58:9050",
        "SOCKS 43.167.175.158:6006",
        "SOCKS 125.227.225.157:3389",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 43.167.163.202:6006",
        "SOCKS 123.182.233.70:7302",
        "SOCKS 43.133.4.227:6006",
        "SOCKS 72.221.196.157:35904",
        "SOCKS 37.200.66.166:9051",
        "SOCKS 51.15.240.207:16379",
        "SOCKS 61.160.66.130:5555",
        "SOCKS 8.215.47.191:10080",
        "SOCKS 181.214.39.72:5719",
        "SOCKS 23.249.27.167:10808",
        "SOCKS 185.216.178.204:8888",
        "SOCKS 36.255.98.177:4262",
        "SOCKS 98.126.23.24:2846",
        "SOCKS 54.215.46.91:20087",
        "SOCKS 51.158.105.107:16379",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}