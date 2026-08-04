function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 212.58.132.5:1080",
        "SOCKS 83.222.7.47:3333",
        "SOCKS 144.91.111.48:1088",
        "SOCKS 5.255.117.127:1080",
        "SOCKS 140.238.28.230:10808",
        "SOCKS 95.31.115.101:9150",
        "SOCKS 47.82.65.128:1011",
        "SOCKS 47.82.112.38:1080",
        "SOCKS 203.25.208.163:1145",
        "SOCKS 70.166.65.160:4145",
        "SOCKS 36.138.206.172:1080",
        "SOCKS 104.207.153.122:10808",
        "SOCKS 23.27.141.243:3080",
        "SOCKS 194.163.174.78:1082",
        "SOCKS 203.25.208.163:1011",
        "SOCKS 218.52.249.121:1080",
        "SOCKS 159.195.65.79:10002",
        "SOCKS 114.35.132.4:37364",
        "SOCKS 45.87.43.136:9050",
        "SOCKS 170.106.177.188:9050",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}