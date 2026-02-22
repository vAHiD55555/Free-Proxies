function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 14.56.107.54:3128",
        "SOCKS 31.211.130.237:8192",
        "SOCKS 178.128.167.129:1080",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 72.221.196.157:35904",
        "SOCKS 152.53.161.111:58367",
        "SOCKS 159.8.114.37:8123",
        "SOCKS 78.135.105.217:50504",
        "SOCKS 163.172.161.35:16379",
        "SOCKS 193.56.255.181:3128",
        "SOCKS 5.255.117.127:1080",
        "SOCKS 159.8.114.37:80",
        "SOCKS 111.61.73.175:7302",
        "SOCKS 51.158.172.165:8811",
        "SOCKS 18.141.177.23:80",
        "SOCKS 213.21.233.242:1080",
        "SOCKS 68.183.90.210:59166",
        "SOCKS 103.174.178.131:1020",
        "SOCKS 194.163.160.97:10808",
        "SOCKS 91.107.244.226:50161",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}