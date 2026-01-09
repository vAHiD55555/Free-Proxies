function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 5.133.219.4:63434",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 124.248.168.90:1080",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 36.255.98.160:8800",
        "SOCKS 218.78.65.202:6688",
        "SOCKS 115.127.80.1:9090",
        "SOCKS 163.172.161.35:16379",
        "SOCKS 174.138.62.182:43715",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 47.83.211.225:1100",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 45.184.103.110:999",
        "SOCKS 202.58.77.194:8031",
        "SOCKS 114.236.93.203:15800",
        "SOCKS 115.127.62.50:1088",
        "SOCKS 152.228.212.223:29272",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 34.96.238.40:8080",
        "SOCKS 144.91.95.238:58237",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}