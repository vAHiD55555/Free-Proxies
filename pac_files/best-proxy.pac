function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 36.255.98.154:4251",
        "SOCKS 72.221.196.157:35904",
        "SOCKS 194.163.182.6:1080",
        "SOCKS 67.43.236.20:31241",
        "SOCKS 62.60.131.253:5317",
        "SOCKS 167.172.109.12:37355",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 205.185.114.78:5556",
        "SOCKS 193.56.255.181:3128",
        "SOCKS 36.255.98.178:14756",
        "SOCKS 36.255.98.167:10805",
        "SOCKS 125.141.139.112:5566",
        "SOCKS 167.172.109.12:46249",
        "SOCKS 95.163.153.116:44937",
        "SOCKS 91.107.148.58:53967",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 1.180.49.222:7302",
        "SOCKS 37.120.133.137:3128",
        "SOCKS 177.19.167.242:80",
        "SOCKS 36.255.98.168:6956",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}