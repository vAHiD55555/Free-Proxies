function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 36.255.98.163:4157",
        "SOCKS 62.60.131.179:4445",
        "SOCKS 36.255.98.162:4121",
        "SOCKS 36.255.98.163:7284",
        "SOCKS 36.255.98.169:18396",
        "SOCKS 36.255.98.153:10006",
        "SOCKS 51.15.210.79:16379",
        "SOCKS 36.255.98.168:4005",
        "SOCKS 36.255.98.150:4005",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 36.255.98.163:4370",
        "SOCKS 152.53.171.242:10139",
        "SOCKS 103.114.53.2:8080",
        "SOCKS 89.46.249.177:8069",
        "SOCKS 62.60.131.179:4173",
        "SOCKS 211.171.114.154:3128",
        "SOCKS 36.255.98.151:4141",
        "SOCKS 36.255.98.163:4117",
        "SOCKS 51.222.241.8:42378",
        "SOCKS 62.60.131.183:4274",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}