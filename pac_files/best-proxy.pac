function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 178.33.162.89:58574",
        "SOCKS 20.210.39.153:8561",
        "SOCKS 188.93.213.242:1080",
        "SOCKS 90.156.197.189:8080",
        "SOCKS 8.217.147.173:8080",
        "SOCKS 179.96.28.58:80",
        "SOCKS 171.238.102.99:1092",
        "SOCKS 185.157.208.159:443",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 114.142.179.168:8080",
        "SOCKS 171.238.88.27:1072",
        "SOCKS 219.147.112.150:1080",
        "SOCKS 104.248.158.27:25100",
        "SOCKS 103.174.178.133:1020",
        "SOCKS 222.129.36.157:57114",
        "SOCKS 47.115.42.157:8044",
        "SOCKS 51.15.223.12:16379",
        "SOCKS 23.140.244.33:8888",
        "SOCKS 20.210.76.178:8561",
        "SOCKS 171.238.102.99:1070",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}