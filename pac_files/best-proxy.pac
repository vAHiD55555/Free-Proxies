function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 45.137.43.0:1081",
        "SOCKS 202.62.55.95:1080",
        "SOCKS 45.43.63.37:10808",
        "SOCKS 58.210.9.66:10088",
        "SOCKS 23.27.141.23:3080",
        "SOCKS 193.221.203.14:1080",
        "SOCKS 5.255.117.127:1080",
        "SOCKS 88.218.206.170:5432",
        "SOCKS 45.130.201.172:1080",
        "SOCKS 125.24.156.113:7080",
        "SOCKS 194.163.174.78:1089",
        "SOCKS 115.127.112.178:1080",
        "SOCKS 117.244.114.54:1080",
        "SOCKS 194.163.174.78:1087",
        "SOCKS 87.239.251.202:1081",
        "SOCKS 31.211.142.115:8192",
        "SOCKS 103.137.75.65:1081",
        "SOCKS 149.130.182.81:1080",
        "SOCKS 5.255.113.177:1080",
        "SOCKS 104.219.236.127:1080",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}