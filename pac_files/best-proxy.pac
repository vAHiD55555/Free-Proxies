function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.158.68.133:8811",
        "SOCKS 114.236.93.203:15800",
        "SOCKS 15.207.196.77:3128",
        "SOCKS 35.180.188.216:80",
        "SOCKS 124.65.117.38:7302",
        "SOCKS 60.13.42.157:1080",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 159.8.114.37:80",
        "SOCKS 184.185.2.45:4145",
        "SOCKS 67.43.228.251:10245",
        "SOCKS 125.141.139.110:5566",
        "SOCKS 46.21.153.16:3128",
        "SOCKS 113.120.61.189:43644",
        "SOCKS 8.142.3.145:3306",
        "SOCKS 115.221.245.167:1080",
        "SOCKS 162.251.108.145:3128",
        "SOCKS 185.6.9.176:8072",
        "SOCKS 188.166.30.17:8888",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 165.227.104.122:48500",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}