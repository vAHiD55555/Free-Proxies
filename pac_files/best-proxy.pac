function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 51.15.210.79:16379",
        "SOCKS 113.100.209.184:3128",
        "SOCKS 176.74.192.44:24822",
        "SOCKS 176.113.73.102:3128",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 15.207.196.77:3128",
        "SOCKS 34.216.224.9:40715",
        "SOCKS 193.239.86.248:3128",
        "SOCKS 13.229.107.106:80",
        "SOCKS 164.163.40.1:10000",
        "SOCKS 51.158.68.133:8811",
        "SOCKS 173.236.187.104:40355",
        "SOCKS 78.12.223.246:9081",
        "SOCKS 51.158.172.165:8811",
        "SOCKS 14.225.240.23:8562",
        "SOCKS 125.141.139.112:5566",
        "SOCKS 84.17.35.129:3128",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 89.110.80.195:10149",
        "SOCKS 114.236.93.203:15800",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}