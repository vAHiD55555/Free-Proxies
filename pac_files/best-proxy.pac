function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 1.225.116.115:1080",
        "SOCKS 64.188.124.97:1080",
        "SOCKS 203.25.208.163:1145",
        "SOCKS 188.132.249.229:8080",
        "SOCKS 51.15.5.21:60349",
        "SOCKS 65.108.203.36:28080",
        "SOCKS 154.17.27.79:21266",
        "SOCKS 173.212.237.43:43648",
        "SOCKS 8.210.4.18:7779",
        "SOCKS 91.151.88.220:6618",
        "SOCKS 43.208.16.199:30756",
        "SOCKS 115.127.36.190:1088",
        "SOCKS 149.129.255.179:80",
        "SOCKS 78.135.105.217:50504",
        "SOCKS 124.156.207.229:1080",
        "SOCKS 74.48.52.131:50161",
        "SOCKS 141.11.42.163:1080",
        "SOCKS 77.246.111.238:1080",
        "SOCKS 5.133.219.4:63434",
        "SOCKS 185.61.38.140:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}