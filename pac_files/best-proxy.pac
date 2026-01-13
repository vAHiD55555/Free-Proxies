function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 185.123.143.247:3128",
        "SOCKS 101.91.242.198:6688",
        "SOCKS 23.251.62.210:10080",
        "SOCKS 178.49.22.23:1080",
        "SOCKS 36.255.98.180:6588",
        "SOCKS 51.15.196.107:16379",
        "SOCKS 51.15.240.207:16379",
        "SOCKS 46.10.208.106:8192",
        "SOCKS 164.163.40.15:10000",
        "SOCKS 104.248.158.27:25100",
        "SOCKS 85.214.244.174:3128",
        "SOCKS 115.127.179.190:2589",
        "SOCKS 169.239.181.213:8888",
        "SOCKS 103.174.178.145:2005",
        "SOCKS 167.235.155.77:47287",
        "SOCKS 5.255.113.177:1080",
        "SOCKS 47.243.58.68:1011",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 185.38.111.1:8080",
        "SOCKS 223.25.109.163:8199",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}