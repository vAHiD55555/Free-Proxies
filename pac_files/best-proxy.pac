function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 118.70.151.55:1080",
        "SOCKS 188.242.163.28:21",
        "SOCKS 5.129.228.92:443",
        "SOCKS 88.218.206.170:5432",
        "SOCKS 150.241.108.239:1080",
        "SOCKS 83.147.216.208:1080",
        "SOCKS 91.188.213.143:1080",
        "SOCKS 20.83.154.79:7070",
        "SOCKS 120.133.82.62:44091",
        "SOCKS 91.232.103.218:1080",
        "SOCKS 203.189.155.68:1080",
        "SOCKS 191.223.220.23:1080",
        "SOCKS 103.126.87.181:7777",
        "SOCKS 160.22.17.4:9988",
        "SOCKS 138.124.68.235:9050",
        "SOCKS 103.160.68.143:80",
        "SOCKS 124.248.191.117:1080",
        "SOCKS 123.139.45.87:10801",
        "SOCKS 47.237.92.86:443",
        "SOCKS 85.192.26.216:3128",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}