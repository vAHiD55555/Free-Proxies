function FindProxyForURL(url, host) {
    var proxyList = [
        "SOCKS 85.198.81.83:1080",
        "SOCKS 65.108.203.37:28080",
        "SOCKS 202.62.50.222:1080",
        "SOCKS 223.25.110.37:8199",
        "SOCKS 43.161.253.113:1080",
        "SOCKS 131.153.163.130:36100",
        "SOCKS 146.59.16.47:8888",
        "SOCKS 107.161.168.159:3333",
        "SOCKS 216.126.237.26:1080",
        "SOCKS 110.235.255.252:1080",
        "SOCKS 5.255.117.127:1080",
        "SOCKS 138.124.10.104:443",
        "SOCKS 188.191.164.55:4890",
        "SOCKS 112.86.205.89:10808",
        "SOCKS 93.123.30.53:1080",
        "SOCKS 115.127.53.114:1080",
        "SOCKS 59.46.216.131:30001",
        "SOCKS 165.154.7.156:8888",
        "SOCKS 107.173.84.29:40001",
        "SOCKS 194.177.28.66:10808",
    ];
    var i = Math.floor(Math.random() * proxyList.length);
    return proxyList[i];
}