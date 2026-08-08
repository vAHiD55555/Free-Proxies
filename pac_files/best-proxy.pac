function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 2.63.188.78:1080",
        "SOCKS 35.204.249.130:1080",
        "SOCKS 47.238.203.170:50002",
        "SOCKS 202.62.52.20:1080",
        "SOCKS 146.235.231.249:1080",
        "SOCKS 185.185.80.58:1088",
        "SOCKS 5.161.50.82:8118",
        "SOCKS 66.59.197.62:4000",
        "SOCKS 182.163.96.66:1080",
        "SOCKS 201.165.172.3:1080",
        "SOCKS 187.63.9.62:63253",
        "SOCKS 65.108.203.36:28080",
        "SOCKS 165.245.187.193:3128",
        "SOCKS 118.194.228.2:10808",
        "SOCKS 88.201.248.85:1080",
        "SOCKS 110.235.247.248:1080",
        "SOCKS 47.250.177.202:1081",
        "SOCKS 103.150.206.77:1080",
        "SOCKS 117.244.114.54:1080",
        "SOCKS 175.27.250.85:44222",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}